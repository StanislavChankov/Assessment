import { Question } from './Question';

export class TestForm {

    public id: number;
    public questions: Array<Question>;

    public constructor(testForm: TestForm) {
        this.id = testForm.id;
        this.questions = testForm.questions;
    }
}
