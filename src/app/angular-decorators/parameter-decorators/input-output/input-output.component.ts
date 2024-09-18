import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  @Input() childvalue!: string;
  @Input() childCourses!: { id: number; name: string }[];
  @Input() isRedPopupOpen!: boolean;

  @Output() close = new EventEmitter<boolean>();
  @Output() text = new EventEmitter();

  hasCloseAnimation: boolean = false;

  changeNewText() {
    this.text.emit('from Child to Patent');
    console.log('lukaa');
  }

  closePopup() {
    this.hasCloseAnimation = true;
    setTimeout(() => {
      this.close.emit();
    }, 2000);
  }
}
