import { Component, OnInit } from '@angular/core';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { Question } from '../../models/Question';
import { Answer } from '../../models/Answer';
import { fakeAsync } from '@angular/core/testing';
import { prepareProfile } from 'selenium-webdriver/firefox';
import { AnsweredQuestion } from '../../models/AnsweredQuestion';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //#region Private Fields

  readonly questions: Array<Question>;
  answeredQuestions: Array<AnsweredQuestion>;
  currentQuestion: Question;
  private currentQuestionIndex: number;

  //#endregion

  constructor() {
    this.questions = [new Question(1, 'Are you ready?', [new Answer(11, 'Yes, I am ready', true ), new Answer(12, 'No, I am not', false)]),
                      new Question(2, 'Are you stupid?', [new Answer(9, 'Ofcourse I am', true), new Answer(13, 'No, FFS', false)]),
                      new Question(3, 'Are you a Man?', [new Answer(10, 'Ofcourse I am', true), new Answer(14, 'No, FFS', false)]),
                      new Question(4, 'Are you stupid?', [new Answer(8, 'Ofcourse I am', true), new Answer(15, 'No, FFS', false)]),
                      new Question(5, 'Are you stupid?', [new Answer(6, 'Ofcourse I am', true), new Answer(16, 'No, FFS', false)]),
                      new Question(7, 'Are you stupid?', [new Answer(7, 'Ofcourse I am', true), new Answer(17, 'No, FFS', false)]),
                      new Question(6, 'Are you stupid?', [new Answer(4, 'Ofcourse I am', true), new Answer(18, 'No, FFS', false)]),
                      new Question(8, 'Are you stupid?', [new Answer(5, 'Ofcourse I am', true), new Answer(19, 'No, FFS', false)]),
                      new Question(9, 'Are you stupid?', [new Answer(3, 'Ofcourse I am', true), new Answer(20, 'No, FFS', false)]),
                      new Question(10, 'Are you stupid?', [new Answer(2, 'Ofcourse I am', true), new Answer(21, 'No, FFS', false)]),
                      new Question(11, 'Are you stupid?', [new Answer(1, 'Ofcourse I am', true), new Answer(22, 'No, FFS', false)])
                    ];
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.answeredQuestions = new Array<AnsweredQuestion>();
  }

    ngOnInit() {
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
}
