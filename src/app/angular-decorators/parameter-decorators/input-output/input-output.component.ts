import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-input-output",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./input-output.component.html",
  styleUrl: "./input-output.component.scss",
})
export class InputOutputComponent {
  @Input() childvalue!: string;
  @Input() childCourses!: { id: number; name: string }[];

  @Output() text = new EventEmitter();

  changeNewText() {
    this.text.emit("from Child to Patent");
  }
}
