import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, HostListener, OnInit } from '@angular/core';

import { Character } from '../../../core/models/character.model';

/**
 * Modal reutilizable para mostrar el detalle de un personaje.
 *
 * Responsabilidades:
 * - Recibir un personaje seleccionado desde el componente padre.
 * - Mostrar su información detallada.
 * - Emitir un evento cuando el usuario quiera cerrar el modal.
 */
@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.scss'
})
export class CharacterModalComponent implements OnInit{
  /**
   * Personaje que se mostrará dentro del modal.
   *
   * Puede ser null porque al inicio no hay personaje seleccionado.
   */
  @Input() character: Character | null = null;

  /**
   * Evento que se emite cuando el usuario presiona "Cerrar".
   */
  @Output() closeModal = new EventEmitter<void>();

  /**
   * Cierra el modal avisando al componente padre.
   */
  onClose(): void {
    document.body.style.overflow = 'auto';
    this.closeModal.emit();
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  /**
 * Cierra el modal al presionar la tecla ESC.
 */
  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.onClose();
  }
}
