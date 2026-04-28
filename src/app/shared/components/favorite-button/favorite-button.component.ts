import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Componente reutilizable para el botón "Mis favoritos".
 *
 * Responsabilidad:
 * - Mostrar texto
 * - Mostrar icono
 * - Avisar al componente padre cuando el usuario hace click
 */
@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {
  /**
   * Evento que se emite cuando el usuario presiona el botón.
   *
   * El componente padre decide qué hacer:
   * - navegar a favoritos
   * - mostrar favoritos
   * - cambiar de vista
   */
  @Output() favoriteClick = new EventEmitter<void>();

  /**
   * Método que dispara el evento hacia el componente padre.
   */
  onClick(): void {
    this.favoriteClick.emit();
  }
}
