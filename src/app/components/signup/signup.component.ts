import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    mobile: '',
    source: 'zerodha',
    partnerId: ''
  };
  errorMessage: string = '';

  onSubmit() {
    if (!this.validateMobile(this.user.mobile)) {
      this.errorMessage = 'Please enter a valid 10 digit mobile number';
      return;
    }
    // Proceed with form submission logic, such as sending data to the server.
    console.log('Form submitted:', this.user);
  }

  validateMobile(mobile: string): boolean {
    return /^\d{10}$/.test(mobile);
  }

}
