import { Answer } from './Answer';

export class Question {

    id: number;
    question: string;
    answers: Array<Answer>;

    constructor(id: number, question: string, answers: Array<Answer>) {
      this.id = id;
      this.question = question;
      this.answers = answers;
    }
  }
