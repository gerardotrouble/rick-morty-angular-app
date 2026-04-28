import { Routes } from '@angular/router';

import { CharacterListComponent } from './features/characters/pages/character-list/character-list.component';
import { FavoritesListComponent } from './features/characters/pages/favorites-list/favorites-list.component';

/**
 * Rutas principales de la aplicación.
 */
export const routes: Routes = [
  /**
   * Home → listado principal
   */
  {
    path: '',
    component: CharacterListComponent
  },

  /**
   * Favoritos
   */
  {
    path: 'favorites',
    component: FavoritesListComponent
  },

  /**
   * Ruta fallback
   */
  {
    path: '**',
    redirectTo: ''
  }
];
