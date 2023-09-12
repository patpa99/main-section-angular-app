import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';

describe('Angular App', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    // To create the Angular App before each test
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'main-section-angular-app'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('main-section-angular-app');
  });

  it('should render the text with count', () => {
    fixture.detectChanges();
    const txtCount = fixture.debugElement.query(
      By.css('#countPart_mainAngularApp')
    );
    expect(txtCount).toBeTruthy();
  });

  it('should render the Angular image when the button is clicked', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(
      By.css('#button_mainAngularApp')
    ).nativeElement;
    expect(button).toBeTruthy();
    button.click();
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('#img_mainAngularApp'));
    expect(img).toBeTruthy();
  });
});
