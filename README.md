![Angular](https://img.shields.io/badge/Angular-19-red)
![Status](https://img.shields.io/badge/status-complete-success)
![Tests](https://img.shields.io/badge/tests-passing-green)

# 🧪 Rick & Morty Characters App

Aplicación desarrollada en **Angular 19** que consume la API de Rick and Morty para mostrar personajes, gestionar favoritos y visualizar detalles en un modal, siguiendo un diseño basado en Figma.

---

## 🚀 Características

### 📌 Lista de personajes
- Consumo de API REST
- Renderizado inicial de personajes
- Paginación dinámica
- Búsqueda en tiempo real (debounce)

### 🔍 Modal de detalle
- Información completa del personaje
- UI responsiva
- Control de overflow y diseño fiel a Figma

### ⭐ Favoritos
- Agregar y eliminar personajes
- Vista independiente de favoritos
- Persistencia con `localStorage`
- Estado global compartido

---

## 🧱 Arquitectura

La aplicación sigue una estructura modular basada en buenas prácticas:

```txt
src/app
│
├── core → Servicios, modelos y estado global
├── shared → Componentes reutilizables
├── features → Páginas principales (characters, favorites)
```

### 🧩 Componentes reutilizables

- `character-card`
- `character-modal`
- `search-box`
- `pagination`
- `character-skeleton`
- `favorite-button`

---

## 🧠 Manejo de estado

Se implementó un estado global utilizando:

- `BehaviorSubject` (RxJS)
- Servicio `FavoritesService`

Permite:

- Sincronización entre componentes
- Actualización reactiva
- Persistencia de datos

---

## 💾 Persistencia

Los favoritos se almacenan en:

```txt
localStorage
```

Esto permite mantener el estado incluso después de recargar la página.

---

## ⚙️ Tecnologías utilizadas

- Angular 19 (Standalone Components)
- TypeScript
- RxJS
- SCSS
- HTML5

---

## 🌐 API

Se utiliza la API pública:

👉 https://rickandmortyapi.com/

---

## 🛠️ Instalación y ejecución

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/rick-morty-angular-app.git

# Entrar al proyecto
cd rick-morty-angular-app

# Instalar dependencias
npm install

# Ejecutar aplicación
npx ng serve -o
```

---

## 🧪 Pruebas unitarias

Se implementaron pruebas unitarias básicas para:

- `FavoritesService` (estado global)
- `CharacterCardComponent`
- `CharacterListComponent`

Ejecución:

```bash
npx ng test
```

---

## 👨‍💻 Autor

**Gerardo Santillan**  
Frontend Developer (Angular)
