import { Component } from "@angular/core";
import { ParameterDecoratorsComponent } from "./parameter-decorators/parameter-decorators.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-angular-decorators",
  standalone: true,
  imports: [
    ParameterDecoratorsComponent,
    AngularDecoratorsComponent,
    CommonModule,
  ],
  templateUrl: "./angular-decorators.component.html",
  styleUrl: "./angular-decorators.component.scss",
})
export class AngularDecoratorsComponent {
  value: string = "15/may/1998";

  courses: { id: number; name: string }[] = [
    {
      id: 1,
      name: "JavaScript Marathon Interview -Questions Series",
    },
    {
      id: 2,
      name: "Mastering React With InterviewQuestions, eStore Project",
    },
    {
      id: 3,
      name: "Mastering TypeScript With MarathodInterview Questions",
    },
    {
      id: 4,
      name: "Mastering HTML, CSS, Sass, Bootstrap + Interview Questions",
    },
  ];
}
