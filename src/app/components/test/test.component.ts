import { prepareProfile } from 'selenium-webdriver/firefox';
import { Question } from './../../models/Question';
import { TestForm } from './../../models/TestForm';
import { Component, OnInit } from '@angular/core';
import { Answer } from '../../models/Answer';
import { AnsweredQuestion } from '../../models/AnsweredQuestion';
import { Element } from '@angular/compiler';
import { TestFormService } from '../../services/test-form.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  questions: Array<Question>;
  answeredQuestions: Array<AnsweredQuestion>;
  currentQuestion: Question;
  private currentQuestionIndex: number;
  testForms: Array<TestForm>;
  constructor(private testFormService: TestFormService) { }

    ngOnInit() {
      this.GetQuestions();
    }

  private Previous(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  private Next(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  private GetCurrentPageNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  onAnsweredQuestion(answeredQuestion: AnsweredQuestion): void {
    const isCurrentQuestionAnswered: boolean = this.answeredQuestions.some(ans => ans.questionId === answeredQuestion.questionId);

    if (!isCurrentQuestionAnswered) {
      this.answeredQuestions.push(answeredQuestion);
    } else {
      this.answeredQuestions.forEach(ans => {
        if (ans.questionId === answeredQuestion.questionId) {
          ans.answerId = answeredQuestion.answerId;
          ans.isCorrect = answeredQuestion.isCorrect;
        }
      });
    }
  }

  onPageClickEvent(clickedTarget): void {
    const pageNumber: number = Number(clickedTarget.innerHTML);

    this.currentQuestionIndex = pageNumber - 1;
    this.currentQuestion = this.questions[pageNumber - 1];
  }

  //#region Requests

  private GetQuestions(): void {
    this.testFormService
    .getTestForm()
    .subscribe(testForm => {
      this.questions = testForm.questions;

      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.answeredQuestions = new Array<AnsweredQuestion>();
    });
  }

  //#endregion

}
