import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterResponse } from '../models/character.model';

/**
 * Servicio encargado de consumir la API de Rick and Morty.
 *
 * Lo hacemos en un servicio para no poner peticiones HTTP
 * directamente dentro de los componentes.
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  /**
   * HttpClient nos permite hacer peticiones HTTP:
   * GET, POST, PUT, DELETE, etc.
   */
  private readonly http = inject(HttpClient);

  /**
   * URL base del endpoint de personajes.
   */
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  /**
   * Obtiene personajes desde la API.
   *
   * @param page Página que queremos consultar.
   * @param name Nombre opcional para buscar personajes.
   */
  getCharacters(page: number = 1, name: string = ''): Observable<CharacterResponse> {
    /**
     * Creamos los parámetros que viajarán en la URL.
     * Ejemplo:
     * https://rickandmortyapi.com/api/character?page=1
     */
    let params = new HttpParams().set('page', page);

    /**
     * Si existe texto de búsqueda, agregamos:
     * &name=rick
     */
    if (name.trim()) {
      params = params.set('name', name.trim());
    }

    /**
     * Retornamos la petición GET tipada con CharacterResponse.
     */
    return this.http.get<CharacterResponse>(this.apiUrl, { params });
  }
}
