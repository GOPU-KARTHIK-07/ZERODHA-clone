import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const logo = fixture.debugElement.query(By.css('.logo-img'));
    expect(logo).not.toBeNull();
    expect(logo.attributes['src']).toBe('assests/images/logo.svg');
    expect(logo.attributes['alt']).toBe('Zerodha logo');
  });

  it('should render the navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('.navbar-links li a'));
    expect(navLinks.length).toBe(5);

    const expectedLinks = ['signup', 'about', 'products', 'pricing', 'support'];
    navLinks.forEach((link, index) => {
      expect(link.attributes['routerLink']).toBe(expectedLinks[index]);
    });
  });

  it('should render the menu button for mobile', () => {
    const menuButton = fixture.debugElement.query(By.css('#menu_btn'));
    expect(menuButton).not.toBeNull();
    expect(menuButton.attributes['title']).toBe('Menu');
  });

  it('should hide navbar links on small screens', () => {
    window.resizeTo(767, 600); // Resize to small screen
    fixture.detectChanges();
    const navLinks = fixture.debugElement.query(By.css('.navbar-links'));
    expect(navLinks.styles['display']).toBe('none');
  });

  it('should display navbar links on large screens', () => {
    window.resizeTo(769, 600); // Resize to large screen
    fixture.detectChanges();
    const navLinks = fixture.debugElement.query(By.css('.navbar-links'));
    expect(navLinks.styles['display']).not.toBe('none');
  });

  afterEach(() => {
    window.resizeTo(1024, 768); // Reset to default screen size
  });
});
