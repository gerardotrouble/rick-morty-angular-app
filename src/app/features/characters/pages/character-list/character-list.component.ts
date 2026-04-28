import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CharacterService } from '../../../../core/services/character.service';
import { Character } from '../../../../core/models/character.model';

import { CharacterCardComponent } from '../../../../shared/components/character-card/character-card.component';
import { SearchBoxComponent } from '../../../../shared/components/search-box/search-box.component';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { CharacterModalComponent } from '../../../../shared/components/character-modal/character-modal.component';
import { CharacterSkeletonComponent } from '../../../../shared/components/character-skeleton/character-skeleton.component';

/**
 * Pantalla principal de personajes.
 */
@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
    SearchBoxComponent,
    FavoriteButtonComponent,
    PaginationComponent,
    CharacterModalComponent,
    CharacterSkeletonComponent
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  loading = false;
  currentPage = 1;
  totalPages = 1;
  searchValue = '';
  errorMessage = '';

  readonly skeletonItems = Array.from({ length: 8 });

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  /**
   * Carga personajes desde la API.
   *
   * Importante:
   * - Evita llamadas duplicadas mientras loading = true.
   * - Muestra skeleton.
   * - No hace reintentos automáticos agresivos para evitar 429.
   */
  getCharacters(page: number): void {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.characters = [];

    this.characterService
      .getCharacters(page, this.searchValue)
      .subscribe({
        next: (response) => {
          this.characters = response.results;
          this.totalPages = response.info.pages;
          this.currentPage = page;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al obtener personajes', error);

          this.characters = [];
          this.totalPages = 1;
          this.loading = false;

          this.errorMessage =
            'No se pudo cargar la información. Intenta de nuevo en unos segundos.';
        }
      });
  }

  /**
   * Busca personajes por nombre.
   */
  onSearch(searchText: string): void {
    if (this.loading) {
      return;
    }

    this.searchValue = searchText.trim();
    this.currentPage = 1;
    this.getCharacters(1);
  }

  /**
   * Cambia de página.
   */
  onPageChange(page: number): void {
    if (this.loading || page === this.currentPage) {
      return;
    }

    this.getCharacters(page);
  }

  goToFavorites(): void {
    this.router.navigate(['/favorites']);
  }

  openModal(character: Character): void {
    this.selectedCharacter = character;
  }

  closeModal(): void {
    this.selectedCharacter = null;
  }
}
