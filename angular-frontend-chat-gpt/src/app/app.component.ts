import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  response: any;
  inputData: string = '';
  arrayGeneralQuestionsBackbase!: any[];
  arrayProductQuestionsBackbase!: any[];
  arrayChatGptQuestionsBackbase!: any[];
  backbaseQuestionsSwitch: string = 'general-questions';

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {
    console.log('ng switch ', this.backbaseQuestionsSwitch);
  }

  ngOnInit(): void {
    this.getGeneralBackbaseQuestions();
    this.getProductBackbaseQuestions();
    this.getChatGptBackbaseQuestions();
  }

  getGeneralBackbaseQuestions(): any {
    return this.apiService.getBackbaseGeneralQuestions().subscribe({
      next: (data) => {
        this.arrayGeneralQuestionsBackbase = data;
      },
    });
  }

  getProductBackbaseQuestions(): any {
    return this.apiService.getBackbaseProductQuestions().subscribe({
      next: (data) => {
        console.log('SAMPLE RESPONSE ', data);
        this.arrayProductQuestionsBackbase = data;
      },
    });
  }

  getChatGptBackbaseQuestions(): any {
    return this.apiService
      .getBackbaseChatGptQuestions(
        this.arrayGeneralQuestionsBackbase,
        this.arrayChatGptQuestionsBackbase
      )
      .subscribe({
        next: (data) => {
          const str = data.choices[0].text;
          const arr = str
            .replace(/\n+/g, ' ')
            .split('?')
            .filter(Boolean)
            .map((s: any) =>
              s.replace(/^[ \t]*[-•][ \t]*/gm, '').replace(/[0-9]+\./, '')
            );
          this.arrayChatGptQuestionsBackbase = arr;
        },
      });
  }

  submit(question: string) {
    const dialog = document.getElementById('dialog-question-box');
    if (dialog) dialog.style.visibility = 'visible';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer INSERT_YOUR_CHAT_GPT_KEY_HERE',
    });
    const body = {
      prompt: question,
      model: 'text-davinci-002',
      max_tokens: 2000,
    };
    this.http
      .post('https://api.openai.com/v1/completions', body, { headers })
      .subscribe((response: any) => {
        this.response = response;
        console.log('RESPONSE CHAT GPT ', this.response);
      });
  }

  chooseTab(tab: string) {
    switch (tab) {
      case 'general':
        this.backbaseQuestionsSwitch = 'general-questions';
        break;
      case 'product':
        this.backbaseQuestionsSwitch = 'product-questions';
        break;
      case 'chat-gpt':
        this.backbaseQuestionsSwitch = 'chat-gpt';
        break;
    }
  }
}
