export class Answer {

    id: number;
    text: string;
    isCorrect: boolean;

    constructor(id: number, text: string, isCorrect: boolean) {
      this.id = id;
      this.text = text;
      this.isCorrect = isCorrect;
    }
  }
