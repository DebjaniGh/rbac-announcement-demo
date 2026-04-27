import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnnouncementBannerComponent } from './announcement-banner/announcement-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnnouncementBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RBAC Announcement Demo';

  openDocs() {
    window.open('https://angular.dev/api', '_blank');
  }

  openSupport() {
    window.open('https://angular.dev/api', '_blank');
  }
}
