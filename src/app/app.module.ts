import { PaginationComponent } from './components/pagination/pagination.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';
import { TestComponent } from './components/test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageItemComponent } from './components/page-item/page-item.component';
import { UnrevealedPageItemComponent } from './components/unrevealed-page-item/unrevealed-page-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    QuestionComponent,
    AnswerComponent,
    PaginationComponent,
    PageItemComponent,
    UnrevealedPageItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
