/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnrevealedPageItemComponent } from './unrevealed-page-item.component';

describe('UnrevealedPageItemComponent', () => {
  let component: UnrevealedPageItemComponent;
  let fixture: ComponentFixture<UnrevealedPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnrevealedPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrevealedPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
