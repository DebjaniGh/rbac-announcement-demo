import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) { }

  submitFeedback(feedback: { message: string }): Observable<any> {
    return this.http.post('/api/feedback', feedback);
  }
}
