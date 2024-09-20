import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  id!: number;
  textIn!: string;

  addOnArray() {
    if (this.id && this.textIn) {
      const newCourse = { id: this.id, name: this.textIn };
      this.childCourses.push(newCourse);
      this.id = 0;
      this.textIn = '';
    } else {
      console.error('Both ID and Name are required');
    }
  }

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
