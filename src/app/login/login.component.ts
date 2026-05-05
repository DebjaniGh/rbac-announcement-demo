import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginResponse } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  isLoading = false;
  loggedInUser: LoginResponse['user'] | null = null;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.loggedInUser = response.user;
        console.log('Login successful:', this.loggedInUser);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.error = err.message;
      },
    });
  }
}
