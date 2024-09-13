import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-parameter-decorators",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./parameter-decorators.component.html",
  styleUrl: "./parameter-decorators.component.scss",
})
export class ParameterDecoratorsComponent {
  @Input() childvalue!: string;
  @Input() childCourses!: { id: number; name: string }[];
}
