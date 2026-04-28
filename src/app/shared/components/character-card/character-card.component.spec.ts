import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import { Character } from '../../../core/models/character.model';

/**
 * Prueba básica de la card.
 *
 * Importante:
 * CharacterCardComponent necesita recibir un personaje por @Input().
 * Si no se lo damos en el test, truena porque el template usa:
 * character.image, character.name, etc.
 */
describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: ''
    },
    location: {
      name: 'Citadel of Ricks',
      url: ''
    },
    image: 'test-image.jpg',
    episode: [],
    url: '',
    created: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;

    /**
     * Asignamos el input obligatorio antes de fixture.detectChanges().
     */
    component.character = mockCharacter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
