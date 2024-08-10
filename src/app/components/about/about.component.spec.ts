import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('People');
  });

  it('should render the profile image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('.profile-image img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.getAttribute('src')).toBe('assests/images/gk.png');
    expect(imgElement?.getAttribute('alt')).toBe('Nithin Kamath');
  });

  it('should render the profile details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileDetails = compiled.querySelector('.profile-details') as HTMLElement;
    expect(profileDetails).toBeTruthy();

    const paragraphs = profileDetails.querySelectorAll('p');
    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].textContent).toContain('Karthik is a new age software developer');
    expect(paragraphs[1].textContent).toContain('He is a member of the Competive coding club');
    expect(paragraphs[2].textContent).toContain('Playing table tennis is his zen.');
  });

  it('should use the custom font family', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileDetails = compiled.querySelector('.profile-details') as HTMLElement;
    expect(profileDetails).toBeTruthy();

    const computedStyle = getComputedStyle(profileDetails);
    expect(computedStyle.fontFamily).toContain('MyCustomFont');
  });
});
