import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Character } from '../models/character.model';

/**
 * Servicio global para manejar favoritos.
 *
 * Ahora también persiste favoritos en localStorage,
 * para que no se pierdan al recargar la página.
 */
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  /**
   * Nombre de la llave que usaremos en localStorage.
   */
  private readonly storageKey = 'rick-morty-favorites';

  /**
   * Estado privado de favoritos.
   */
  private readonly favoritesSubject = new BehaviorSubject<Character[]>([]);

  /**
   * Estado público observable.
   */
  readonly favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    /**
     * Al iniciar el servicio, intentamos recuperar favoritos guardados.
     */
    this.loadFavoritesFromStorage();
  }

  /**
   * Obtiene favoritos actuales.
   */
  getFavorites(): Character[] {
    return this.favoritesSubject.value;
  }

  /**
   * Valida si un personaje ya está en favoritos.
   */
  isFavorite(characterId: number): boolean {
    return this.favoritesSubject.value.some(
      (character) => character.id === characterId
    );
  }

  /**
   * Agrega personaje a favoritos.
   */
  addFavorite(character: Character): void {
    if (this.isFavorite(character.id)) {
      return;
    }

    const updatedFavorites = [
      ...this.favoritesSubject.value,
      character
    ];

    this.updateFavorites(updatedFavorites);
  }

  /**
   * Elimina personaje de favoritos.
   */
  removeFavorite(characterId: number): void {
    const updatedFavorites = this.favoritesSubject.value.filter(
      (character) => character.id !== characterId
    );

    this.updateFavorites(updatedFavorites);
  }

  /**
   * Alterna favorito.
   */
  toggleFavorite(character: Character): void {
    if (this.isFavorite(character.id)) {
      this.removeFavorite(character.id);
      return;
    }

    this.addFavorite(character);
  }

  /**
   * Actualiza el estado global y también localStorage.
   */
  private updateFavorites(favorites: Character[]): void {
    this.favoritesSubject.next(favorites);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  /**
   * Carga favoritos guardados desde localStorage.
   */
  private loadFavoritesFromStorage(): void {
    const savedFavorites = localStorage.getItem(this.storageKey);

    if (!savedFavorites) {
      return;
    }

    try {
      const parsedFavorites = JSON.parse(savedFavorites) as Character[];
      this.favoritesSubject.next(parsedFavorites);
    } catch (error) {
      console.error('Error al cargar favoritos desde localStorage', error);
      localStorage.removeItem(this.storageKey);
    }
  }
}
