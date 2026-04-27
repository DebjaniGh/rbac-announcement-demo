import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-modal.component.html',
  styleUrl: './feedback-modal.component.css'
})
export class FeedbackModalComponent {
  feedbackMessage = '';
  isSubmitting = false;

  constructor(
    public activeModal: NgbActiveModal,
    private feedbackService: FeedbackService
  ) {}

  submit() {
    if (!this.feedbackMessage) return;
    
    this.isSubmitting = true;
    this.feedbackService.submitFeedback({ message: this.feedbackMessage })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.activeModal.close();
        },
        error: () => {
          this.isSubmitting = false;
        }
      });
  }
}
