import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

email: string = '';
  message: string = '';

  constructor() {}

  sendEmail() {
    const templateParams = {
      to_email: this.email,
      subject: 'Newsletter Signup',
      message: 'Thank you for signing up for our newsletter!'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(response => {
        this.message = 'Email sent successfully!';
        this.email = ''; // Clear the input field
      }, error => {
        this.message = 'Failed to send email. Please try again later.';
      });
  }
}
