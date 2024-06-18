import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';

import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [UserService]
})
export class UserFormComponent {

  user = { username: '', email: '', password: '' };
  credentials = { username: '', password: '' };
  isRegisterMode = false;

  constructor(private authService: UserService, private router: Router) {}

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
  }

  onSubmit(): void {
    if (this.isRegisterMode) {
      this.authService.register(this.user)
        .subscribe(
          () => {
            console.log('User registered successfully');
            this.router.navigate(['/file-upload']); // Navigate to dashboard or profile page
          },
          error => {
            console.error('Error registering user:', error);
            // Handle error (show error message, etc.)
          }
        );
    } else {
      this.authService.login(this.credentials)
        .subscribe(
          () => {
            console.log('User logged in successfully');
            this.router.navigate(['/file-upload']); // Navigate to dashboard or profile page
          },
          error => {
            console.error('Error logging in:', error);
            // Handle error (show error message, etc.)
          }
        );
    }
  }
  
}
