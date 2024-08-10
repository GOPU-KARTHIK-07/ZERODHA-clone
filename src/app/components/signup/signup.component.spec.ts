import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the signup component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the signup heading and help text', () => {
    const signupHead = fixture.debugElement.query(By.css('.signup-head'));
    const signupHelp = fixture.debugElement.query(By.css('.signup-help'));

    expect(signupHead).not.toBeNull();
    expect(signupHead.nativeElement.textContent).toBe('Signup now');

    expect(signupHelp).not.toBeNull();
    expect(signupHelp.nativeElement.textContent).toBe('Or track your existing application');
  });

  it('should render the mobile number input with prefix', () => {
    const mobilePrefix = fixture.debugElement.query(By.css('.mobile-prefix'));
    const mobileInput = fixture.debugElement.query(By.css('input[type="number"]'));

    expect(mobilePrefix).not.toBeNull();
    expect(mobilePrefix.nativeElement.textContent).toBe('+91');

    expect(mobileInput).not.toBeNull();
    expect(mobileInput.nativeElement.placeholder).toBe('Your 10 digit mobile number');
  });

  it('should render the continue button with pulse effect', () => {
    const continueButton = fixture.debugElement.query(By.css('.register-user'));
    const pulseBubbles = fixture.debugElement.queryAll(By.css('.pulse-bubble'));

    expect(continueButton).not.toBeNull();
    expect(continueButton.nativeElement.textContent.trim()).toContain('Continue');

    expect(pulseBubbles.length).toBe(4);
  });

  it('should validate the mobile number input', () => {
    const mobileInput = fixture.debugElement.query(By.css('input[type="number"]'));

    mobileInput.nativeElement.value = '1234567890';
    mobileInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.user.mobile).toBe('1234567890');
  });

  it('should display error message if form is invalid', () => {
    component.errorMessage = 'Invalid mobile number';
    fixture.detectChanges();
    
    const errorMessage = fixture.debugElement.query(By.css('.error-message'));

    expect(errorMessage).not.toBeNull();
    expect(errorMessage.nativeElement.textContent).toBe('Invalid mobile number');
  });

  it('should render the additional information and links', () => {
    const infoText = fixture.debugElement.query(By.css('.text-grey.text-12.text-center'));
    const supportArticleLink = fixture.debugElement.query(By.css('a[href="https://support.zerodha.com/category/console/reports/other-queries/articles/details-collected-when-opening-an-account"]'));
    const offlineFormsLink = fixture.debugElement.query(By.css('a[href="../resources.1"]'));
    const helpLink = fixture.debugElement.query(By.css('a[href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening?language=english"]'));

    expect(infoText).not.toBeNull();
    expect(infoText.nativeElement.textContent).toContain('I authorise Zerodha to contact me even if my number is registered on DND.');

    expect(supportArticleLink).not.toBeNull();
    expect(supportArticleLink.nativeElement.textContent).toBe('this article');

    expect(offlineFormsLink).not.toBeNull();
    expect(offlineFormsLink.nativeElement.textContent).toBe('offline forms.');

    expect(helpLink).not.toBeNull();
    expect(helpLink.nativeElement.textContent).toBe('click here.');
  });
});
