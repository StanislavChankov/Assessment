import { Answer } from './Answer';
import { debug } from 'util';

export class Question {

    question: string;
    answers: Array<Answer>;

    constructor(question: string, answers: Array<Answer>) {
      this.question = question;
      this.answers = answers;
    }
  }
