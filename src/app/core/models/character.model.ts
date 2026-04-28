/**
 * Modelo principal de la respuesta que devuelve la API.
 *
 * La API de Rick and Morty no devuelve directamente un arreglo.
 * Devuelve un objeto con:
 * - info: datos de paginación
 * - results: lista de personajes
 */
export interface CharacterResponse {
  info: Info;
  results: Character[];
}

/**
 * Información de paginación.
 *
 * Esta parte nos servirá después para:
 * - saber cuántas páginas existen
 * - avanzar a la siguiente página
 * - regresar a la página anterior
 */
export interface Info {
  count: number;        // Total de personajes existentes
  pages: number;        // Total de páginas disponibles
  next: string | null;  // URL de la siguiente página
  prev: string | null;  // URL de la página anterior
}

/**
 * Modelo de un personaje.
 *
 * Aquí definimos las propiedades que devuelve la API
 * y que vamos a usar para tarjetas, favoritos y modal.
 */
export interface Character {
  id: number;                // Identificador único del personaje
  name: string;              // Nombre del personaje
  status: string;            // Estado: Alive, Dead o unknown
  species: string;           // Especie: Human, Alien, etc.
  type: string;              // Tipo adicional, a veces viene vacío
  gender: string;            // Género del personaje
  origin: LocationInfo;      // Lugar de origen
  location: LocationInfo;    // Ubicación actual
  image: string;             // Imagen del personaje
  episode: string[];         // Lista de episodios donde aparece
  url: string;               // URL del recurso en la API
  created: string;           // Fecha de creación del registro
}

/**
 * Modelo reutilizable para origen y ubicación.
 *
 * La API usa la misma estructura para:
 * - origin
 * - location
 */
export interface LocationInfo {
  name: string;      // Nombre del lugar
  url: string;       // URL del lugar en la API
}
