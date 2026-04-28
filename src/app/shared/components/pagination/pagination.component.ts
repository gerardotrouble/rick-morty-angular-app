import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Componente reutilizable de paginación.
 */
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  /**
   * Deshabilita la paginación mientras la API carga.
   */
  @Input() disabled: boolean = false;

  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): (number | string)[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    if (this.currentPage <= 2) {
      return [1, 2, 3, '...', this.totalPages];
    }

    if (this.currentPage >= this.totalPages - 1) {
      return [1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages];
    }

    return [
      1,
      '...',
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      '...',
      this.totalPages
    ];
  }

  get isFirstPage(): boolean {
    return this.currentPage <= 1;
  }

  get isLastPage(): boolean {
    return this.currentPage >= this.totalPages;
  }

  previousPage(): void {
    if (this.disabled || this.isFirstPage) {
      return;
    }

    this.pageChange.emit(this.currentPage - 1);
  }

  nextPage(): void {
    if (this.disabled || this.isLastPage) {
      return;
    }

    this.pageChange.emit(this.currentPage + 1);
  }

  selectPage(page: number | string): void {
    if (this.disabled || typeof page !== 'number') {
      return;
    }

    if (page === this.currentPage || page < 1 || page > this.totalPages) {
      return;
    }

    this.pageChange.emit(page);
  }
}
