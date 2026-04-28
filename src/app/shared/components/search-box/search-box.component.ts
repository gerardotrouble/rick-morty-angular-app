import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Buscador reutilizable con debounce.
 */
@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  searchValue: string = '';

  @Output() searchChange = new EventEmitter<string>();

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchValue = input.value;

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    /**
     * Esperamos 500ms para no saturar la API.
     */
    this.debounceTimer = setTimeout(() => {
      this.searchChange.emit(this.searchValue);
    }, 500);
  }
}
