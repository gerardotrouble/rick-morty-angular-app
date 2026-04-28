import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**
 * Test mínimo del componente raíz.
 *
 * Quitamos el test default de Angular
 * porque ya no existe el texto "Hello..."
 */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
