package com.bring.chatgpt.Controllers;

import com.bring.chatgpt.Models.ProductQuestions;
import com.bring.chatgpt.Models.Question;
import com.bring.chatgpt.Repo.ProductQuestionsRepo;
import com.bring.chatgpt.Repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QuestionController {

    @Autowired
    private QuestionRepo questionRepo;
    @Autowired
    private ProductQuestionsRepo productQuestionRepo;

    @GetMapping("/get-general-questions")
    public List<Question> getQuestions() {
        return questionRepo.findAll();
    }

    @GetMapping("/get-product-questions")
    public List<ProductQuestions> getProductQuestions() {
        return productQuestionRepo.findAll();
    }
}
