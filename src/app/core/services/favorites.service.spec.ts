/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { Character } from '../models/character.model';

/**
 * Pruebas unitarias mínimas para FavoritesService.
 */
describe('FavoritesService', () => {
  let service: FavoritesService;

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
    image: '',
    episode: [],
    url: '',
    created: ''
  };

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});

    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a character to favorites', () => {
    service.addFavorite(mockCharacter);

    expect(service.getFavorites().length).toBe(1);
    expect(service.getFavorites()[0].id).toBe(mockCharacter.id);
  });

  it('should not add duplicated characters', () => {
    service.addFavorite(mockCharacter);
    service.addFavorite(mockCharacter);

    expect(service.getFavorites().length).toBe(1);
  });

  it('should remove a character from favorites', () => {
    service.addFavorite(mockCharacter);
    service.removeFavorite(mockCharacter.id);

    expect(service.getFavorites().length).toBe(0);
  });

  it('should validate if a character is favorite', () => {
    service.addFavorite(mockCharacter);

    expect(service.isFavorite(mockCharacter.id)).toBeTrue();
  });

  it('should persist favorites in localStorage', () => {
    service.addFavorite(mockCharacter);

    const savedFavorites = localStorage.getItem('rick-morty-favorites');

    expect(savedFavorites).toBeTruthy();
    expect(savedFavorites).toContain('Rick Sanchez');
  });
});
