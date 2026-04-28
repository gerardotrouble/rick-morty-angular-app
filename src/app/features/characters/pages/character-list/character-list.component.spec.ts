import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterListComponent } from './character-list.component';

/**
 * Prueba básica del componente principal de personajes.
 *
 * Importante:
 * CharacterListComponent usa CharacterService,
 * y CharacterService usa HttpClient.
 *
 * Por eso importamos HttpClientTestingModule.
 */
describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterListComponent,

        /**
         * Provee HttpClient falso para pruebas.
         * Evita el error: No provider for HttpClient
         */
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    /**
     * Ejecuta el ciclo inicial del componente.
     */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
