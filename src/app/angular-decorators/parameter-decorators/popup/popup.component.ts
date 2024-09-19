import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() isPopupOpen!: boolean;

  @Output() closePopup = new EventEmitter();

  hasCloseAnimation: boolean = false;

  closePopupEvent() {
    this.hasCloseAnimation = true;
    setTimeout(() => {
      this.closePopup.emit();
    }, 2000);
  }
}
