import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../../../../core/models/character.model';
import { FavoritesService } from '../../../../core/services/favorites.service';

import { CharacterCardComponent } from '../../../../shared/components/character-card/character-card.component';
import { CharacterModalComponent } from '../../../../shared/components/character-modal/character-modal.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

/**
 * Página de favoritos.
 *
 * Responsabilidades:
 * - Mostrar los personajes marcados como favoritos.
 * - Permitir abrir modal de detalle.
 * - Permitir eliminar favoritos desde esta vista.
 */
@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
    CharacterModalComponent,
    PaginationComponent
  ],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  /**
   * Personaje seleccionado para el modal.
   */
  selectedCharacter: Character | null = null;

  /**
   * Página actual de favoritos.
   */
  currentPage: number = 1;

  /**
   * Cantidad de favoritos por página.
   */
  readonly itemsPerPage: number = 20;

  constructor(
    public favoritesService: FavoritesService,
    private router: Router
  ) { }

  /**
   * Devuelve todos los favoritos actuales.
   */
  get favorites(): Character[] {
    return this.favoritesService.getFavorites();
  }

  /**
   * Total de páginas de favoritos.
   */
  get totalPages(): number {
    return Math.max(1, Math.ceil(this.favorites.length / this.itemsPerPage));
  }

  /**
   * Favoritos visibles en la página actual.
   */
  get paginatedFavorites(): Character[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.favorites.slice(start, end);
  }

  /**
   * Abre modal.
   */
  openModal(character: Character): void {
    this.selectedCharacter = character;
  }

  /**
   * Cierra modal.
   */
  closeModal(): void {
    this.selectedCharacter = null;
  }

  /**
   * Cambia página de favoritos.
   */
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  /**
   * Vuelve al listado principal.
   * Por ahora usaremos navegación por ruta en el siguiente paso.
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
