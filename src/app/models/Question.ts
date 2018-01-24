import { Answer } from './Answer';

export class Question {

    id: number;
    text: string;
    answers: Array<Answer>;

    constructor(id: number, text: string, answers: Array<Answer>) {
      this.id = id;
      this.text = text;
      this.answers = answers;
    }
  }
