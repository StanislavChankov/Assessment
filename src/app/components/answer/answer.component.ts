import { Answer } from './../../models/Answer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  answer: Answer;
  @Output()
  answerClickEvent: EventEmitter<Answer>;

  constructor() {
    this.answerClickEvent = new EventEmitter<Answer>();
  }

  ngOnInit() {
  }

  answerClicked(): void {
    this.answerClickEvent.emit(this.answer);
  }

}
