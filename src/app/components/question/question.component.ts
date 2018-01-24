import { Question } from './../../models/Question';
import { AnsweredQuestionFactory } from './../../factories/AnsweredQuestionFactory';
import { Answer } from './../../models/Answer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnsweredQuestion } from '../../models/AnsweredQuestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;
  @Output()
  answeredQuestionEvent: EventEmitter<AnsweredQuestion>;

  constructor() {
    this.answeredQuestionEvent = new EventEmitter<AnsweredQuestion>();
  }

  onQuestionAnswered(answerEvent: Answer, answerEl): void {
    const answeredQuestion: AnsweredQuestion = new AnsweredQuestion(this.question.id, answerEvent.id, answerEvent.isCorrect);
    this.answeredQuestionEvent.emit(answeredQuestion);
    answerEl.classList.add('answered');
  }

  ngOnInit() {
  }

}
