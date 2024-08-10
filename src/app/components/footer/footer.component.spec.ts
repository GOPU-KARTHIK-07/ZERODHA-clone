import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.footer-logo img');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('src')).toBe('assests/images/logo.svg');
  });

  it('should render the social media links with images', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = compiled.querySelectorAll('.social li a img');
    expect(socialLinks.length).toBeGreaterThan(0);

    const twitterLink = compiled.querySelector('a[href="https://twitter.com/zerodhaonline"] img');
    expect(twitterLink?.getAttribute('src')).toBe('assests/images/x-twitter.svg');

    const youtubeLink = compiled.querySelector('a[href="https://www.youtube.com/@zerodhaonline"] img');
    expect(youtubeLink?.getAttribute('src')).toBe('assests/images/youtube.svg');
  });

  it('should render company links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const companyLinks = compiled.querySelectorAll('.main-footer .columns:nth-child(2) li a');
    expect(companyLinks.length).toBeGreaterThan(0);

    const aboutLink = compiled.querySelector('a[href="about/index.html"]');
    expect(aboutLink?.textContent).toContain('About');
  });

  it('should render support links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const supportLinks = compiled.querySelectorAll('.main-footer .columns:nth-child(3) li a');
    expect(supportLinks.length).toBeGreaterThan(0);

    const contactLink = compiled.querySelector('a[href="contact/index.html"]');
    expect(contactLink?.textContent).toContain('Contact us');
  });

  it('should render account links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const accountLinks = compiled.querySelectorAll('.main-footer .columns:nth-child(4) li a');
    expect(accountLinks.length).toBeGreaterThan(0);

    const openAccountLink = compiled.querySelector('a[href="open-account/index.html"]');
    expect(openAccountLink?.textContent).toContain('Open an account');
  });

  it('should render the smallprint text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const smallprint = compiled.querySelector('.smallprint');
    expect(smallprint).toBeTruthy();

    const smallprintParagraphs = smallprint?.querySelectorAll('p');
    expect(smallprintParagraphs?.length).toBeGreaterThan(0);
  });

  it('should render the graveyard links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const graveyardLinks = compiled.querySelectorAll('.footer-graveyard-links ul li a');
    expect(graveyardLinks.length).toBeGreaterThan(0);

    const nseLink = compiled.querySelector('a[href="https://nseindia.com"]');
    expect(nseLink?.textContent).toContain('NSE');
  });
});
