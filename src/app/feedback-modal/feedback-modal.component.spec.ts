import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FeedbackModalComponent } from './feedback-modal.component';
import { FeedbackService } from '../services/feedback.service';

describe('FeedbackModalComponent', () => {
  let component: FeedbackModalComponent;
  let fixture: ComponentFixture<FeedbackModalComponent>;
  let feedbackService: FeedbackService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgbModule,
        FormsModule,
        HttpClientTestingModule,
        FeedbackModalComponent
      ],
      providers: [NgbActiveModal, FeedbackService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FeedbackModalComponent);
    component = fixture.componentInstance;
    feedbackService = TestBed.inject(FeedbackService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a textarea for feedback', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');
    expect(textarea).toBeTruthy();
  });

  it('should have submit and cancel buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    const submitButton = Array.from(buttons).find(button => button.textContent?.includes('Submit'));
    const cancelButton = Array.from(buttons).find(button => button.textContent?.includes('Cancel'));
    
    expect(submitButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it('should disable submit button when no feedback is entered', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button.btn-primary') as HTMLButtonElement;
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable submit button when feedback is entered', () => {
    component.feedbackMessage = 'Test feedback';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button.btn-primary') as HTMLButtonElement;
    expect(submitButton.disabled).toBeFalsy();
  });
});
