import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Interface that describes what the backend returns on successful login
export interface LoginResponse {
  message: string;
  user: {
    id: number;
    username: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  /**
   * Sends a POST request to /api/auth/login with the user's credentials.
   * Returns an Observable that emits the backend's response.
   */
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', {
      username,
      password,
    });
  }
}
