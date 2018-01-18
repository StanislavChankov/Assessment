export class AnsweredQuestion {

    questionId: number;
    answerId: number;
    isCorrect: boolean;

    constructor(questionId: number, answerId: number, isCorrect: boolean) {
        this.questionId = questionId;
        this.answerId = answerId;
        this.isCorrect = isCorrect;
    }
}
