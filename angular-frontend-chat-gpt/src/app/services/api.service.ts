import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBackbaseGeneralQuestions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-general-questions`);
  }

  getBackbaseProductQuestions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-product-questions`);
  }

  getBackbaseChatGptQuestions(
    generalQuestions: string[],
    productQuestions: string[]
  ): Observable<any> {
    const dialog = document.getElementById('dialog-question-box');
    if (dialog) dialog.style.visibility = 'visible';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer: INSERT_YOUR_CHAT_GPT_KEY_HERE',
    });

    const body = {
      prompt: `Generate new questions about the Backbase platform based on the questions provided in the following categories: General and Products.

    Consider the questions present in ${generalQuestions} and ${productQuestions}, and generate nine new questions that are not included in the previous categories. Each question should be returned as a string with a question mark, and should not contain special characters, numbers, or bullet points.in

    For best results, ensure that your questions are clear and concise.`,
      model: 'text-davinci-002',
      temperature: 0.7,
      max_tokens: 1000,
      n: 9,
    };

    return this.http.post('https://api.openai.com/v1/completions', body, {
      headers,
    });
  }
}
