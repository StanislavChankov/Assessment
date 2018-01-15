import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //#region Private Fields

  @Input()
  question: Question;

  //#endregion

  constructor() {
  }



  ngOnInit() {
  }

}
