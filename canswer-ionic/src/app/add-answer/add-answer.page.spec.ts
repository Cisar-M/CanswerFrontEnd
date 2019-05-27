import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerPage } from './add-answer.page';

describe('AddAnswerPage', () => {
  let component: AddAnswerPage;
  let fixture: ComponentFixture<AddAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
