import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { AnnouncementBannerComponent } from './announcement-banner.component';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { environment } from '../../environments/environment';

describe('AnnouncementBannerComponent', () => {
  let component: AnnouncementBannerComponent;
  let fixture: ComponentFixture<AnnouncementBannerComponent>;
  let localStorageMock: { [key: string]: string };

  beforeEach(async () => {
    localStorageMock = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string) => localStorageMock[key]);
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => localStorageMock[key] = value);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NgbModule,
        AnnouncementBannerComponent,
        FeedbackModalComponent
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AnnouncementBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the announcement message from environment', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const alert = compiled.querySelector('.alert');
    expect(alert?.textContent).toContain(environment.ANNOUNCEMENT_MESSAGE);
  });

  it('should have a dismiss button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dismissButton = compiled.querySelector('button.btn-close');
    expect(dismissButton).toBeTruthy();
  });

  it('should have a feedback button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const feedbackButton = compiled.querySelector('button.btn-link');
    expect(feedbackButton).toBeTruthy();
    expect(feedbackButton?.textContent).toContain('Give feedback');
  });

  it('should hide banner when dismissed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dismissButton = compiled.querySelector('button.btn-close') as HTMLButtonElement;
    
    dismissButton.click();
    fixture.detectChanges();
    
    const alert = compiled.querySelector('.alert');
    expect(alert).toBeFalsy();
  });

  it('should check localStorage on init', () => {
    localStorageMock['announcement-dismissed'] = 'true';
    fixture = TestBed.createComponent(AnnouncementBannerComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const alert = compiled.querySelector('.alert');
    expect(alert).toBeFalsy();
  });
});
