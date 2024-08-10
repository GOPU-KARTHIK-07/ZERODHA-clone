import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingComponent } from './pricing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PricingComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the pricing component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the pricing header', () => {
    const header = fixture.debugElement.query(By.css('.pricing-header'));
    expect(header).not.toBeNull();
    expect(header.nativeElement.textContent).toContain('Pricing');
    expect(header.nativeElement.textContent).toContain('Free equity investments and flat ₹20 intraday and F&O trades');
  });

  it('should render the three pricing sections with images and descriptions', () => {
    const sections = fixture.debugElement.queryAll(By.css('.pricing-sections .four.columns'));
    expect(sections.length).toBe(3);

    const sectionTitles = ['Free equity delivery', 'Intraday and F&O trades', 'Free direct MF'];
    sections.forEach((section, index) => {
      const img = section.query(By.css('img'));
      const h3 = section.query(By.css('h3'));
      const p = section.query(By.css('p'));

      expect(img).not.toBeNull();
      expect(h3.nativeElement.textContent).toBe(sectionTitles[index]);
      expect(p).not.toBeNull();
    });
  });

  it('should render the "Open a Zerodha account" section with a button', () => {
    const kiteSection = fixture.debugElement.query(By.css('.kite-sections'));
    expect(kiteSection).not.toBeNull();

    const h2 = kiteSection.query(By.css('h2'));
    const p = kiteSection.query(By.css('p'));
    const button = kiteSection.query(By.css('.button'));

    expect(h2.nativeElement.textContent).toBe('Open a Zerodha account');
    expect(p.nativeElement.textContent).toContain('Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.');
    expect(button.nativeElement.textContent).toBe('Sign up now');
  });

  it('should render the calculator links', () => {
    const calculatorLinks = fixture.debugElement.queryAll(By.css('.calculator-links .four.columns a'));
    expect(calculatorLinks.length).toBe(2);

    const expectedLinks = ['Brokerage calculator', 'List of charges'];
    calculatorLinks.forEach((link, index) => {
      expect(link.nativeElement.textContent).toBe(expectedLinks[index]);
    });
  });

  it('should render the list items with additional charges information', () => {
    const listItems = fixture.debugElement.queryAll(By.css('.list-items li'));
    expect(listItems.length).toBe(6);
  });
});
