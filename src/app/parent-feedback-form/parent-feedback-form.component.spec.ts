import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFeedbackFormComponent } from './parent-feedback-form.component';

describe('ParentFeedbackFormComponent', () => {
  let component: ParentFeedbackFormComponent;
  let fixture: ComponentFixture<ParentFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFeedbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
