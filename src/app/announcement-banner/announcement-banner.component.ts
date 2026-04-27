import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-announcement-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-banner.component.html',
  styleUrl: './announcement-banner.component.css'
})
export class AnnouncementBannerComponent implements OnInit {
  message = environment.ANNOUNCEMENT_MESSAGE;
  isVisible = true;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const dismissed = localStorage.getItem('announcement-dismissed');
    this.isVisible = !dismissed;
  }

  dismiss() {
    this.isVisible = false;
    localStorage.setItem('announcement-dismissed', 'true');
  }

  openFeedback() {
    this.modalService.open(FeedbackModalComponent);
  }
}
