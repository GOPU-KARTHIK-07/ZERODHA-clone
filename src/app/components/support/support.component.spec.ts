import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SupportComponent } from './support.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';


describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, SupportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the support component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form elements correctly', () => {
    const emailLabel = fixture.debugElement.query(By.css('label[for="email"]'));
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]'));
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(emailLabel).not.toBeNull();
    expect(emailLabel.nativeElement.textContent).toBe('Your Email:');

    expect(emailInput).not.toBeNull();
    expect(emailInput.nativeElement.value).toBe('');

    expect(submitButton).not.toBeNull();
    expect(submitButton.nativeElement.textContent).toBe('Send Email');
  });

  it('should bind input value to email property', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]'));
    emailInput.nativeElement.value = 'test@example.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));

    expect(component.email).toBe('test@example.com');
  });

  it('should send email and display success message', async () => {


    component.email = 'test@example.com';
    component.sendEmail();

    await fixture.whenStable();
    fixture.detectChanges();

    expect(emailjs.send).toHaveBeenCalledWith('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: 'test@example.com',
      subject: 'Newsletter Signup',
      message: 'Thank you for signing up for our newsletter!'
    }, 'YOUR_USER_ID');

    const messageDiv = fixture.debugElement.query(By.css('.message'));
    expect(messageDiv).not.toBeNull();
    expect(messageDiv.nativeElement.textContent).toBe('Email sent successfully!');
    expect(component.email).toBe('');
  });

  it('should display error message if email fails to send', async () => {
    

    component.email = 'test@example.com';
    component.sendEmail();

    await fixture.whenStable();
    fixture.detectChanges();

    const messageDiv = fixture.debugElement.query(By.css('.message'));
    expect(messageDiv).not.toBeNull();
    expect(messageDiv.nativeElement.textContent).toBe('Failed to send email. Please try again later.');
  });
});
