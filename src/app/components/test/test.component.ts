import { Component, OnInit } from '@angular/core';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { Question } from '../../models/Question';
import { Answer } from '../../models/Answer';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //#region Private Fields

  readonly questions: Array<Question>;

  currentQuestion: Question;
  private currentQuestionIndex: number;

  //#endregion

  constructor() {
    this.questions = [new Question('Are you ready?', [new Answer('Yes, I am ready', true ), new Answer('No, I am not', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you a Man?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)]),
                      new Question('Are you stupid?', [new Answer('Ofcourse I am', true), new Answer('No, FFS', false)])
                    ];
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
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
}
