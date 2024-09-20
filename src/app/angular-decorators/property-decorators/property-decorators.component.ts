import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { HightlightDirective } from './hightlight.directive';

@Component({
  selector: 'app-property-decorators',
  standalone: true,
  imports: [HightlightDirective],
  templateUrl: './property-decorators.component.html',
  styleUrl: './property-decorators.component.scss',
})
export class PropertyDecoratorsComponent {
  @ViewChild(HightlightDirective) highlightDirective:
    | HightlightDirective
    | undefined;
  @Input() mess!: string;
  @Output() lengt = new EventEmitter<number>();

  btnclick() {
    this.lengt.emit(this.mess.length);
  }

  colorClick() {
    console.log(123);
    console.log();
    if (this.highlightDirective) {
      this.highlightDirective['pickColor']();
    }
  }
}
