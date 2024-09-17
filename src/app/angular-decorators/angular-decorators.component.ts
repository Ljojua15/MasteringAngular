import { Component } from "@angular/core";
import { ParameterDecoratorsComponent } from "./parameter-decorators/parameter-decorators.component";
import { CommonModule } from "@angular/common";
type CombDataValue = string | { id: number; name: string }[];
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
export class AngularDecoratorsComponent {}
