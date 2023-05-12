package com.bring.chatgpt.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "product_questions")
public class ProductQuestions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @Column
    String question;
}
