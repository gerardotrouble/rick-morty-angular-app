import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../../core/models/character.model';
import { FavoritesService } from '../../../core/services/favorites.service';

/**
 * Card reutilizable para mostrar un personaje.
 *
 * Responsabilidades:
 * - Mostrar imagen y nombre
 * - Permitir marcar favorito
 * - Avisar al padre cuando se da click en la card
 */
@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  /**
   * Personaje recibido desde el componente padre.
   */
  @Input() character!: Character;

  /**
   * Evento que avisa al padre que se hizo click en la card.
   */
  @Output() cardClick = new EventEmitter<void>();

  constructor(public favoritesService: FavoritesService) { }

  /**
   * Abre el modal desde el componente padre.
   */
  onCardClick(): void {
    this.cardClick.emit();
  }

  /**
   * Agrega o quita de favoritos.
   */
  toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.character);
  }

  /**
   * Valida si el personaje ya es favorito.
   */
  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.character.id);
  }
}
