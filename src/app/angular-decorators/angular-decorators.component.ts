import { Component } from '@angular/core';
import { ParameterDecoratorsComponent } from './parameter-decorators/parameter-decorators.component';
import { CommonModule } from '@angular/common';
import { PropertyDecoratorsComponent } from './property-decorators/property-decorators.component';
type CombDataValue = string | { id: number; name: string }[];
@Component({
  selector: 'app-angular-decorators',
  standalone: true,
  imports: [
    ParameterDecoratorsComponent,
    AngularDecoratorsComponent,
    CommonModule,
    PropertyDecoratorsComponent,
  ],
  templateUrl: './angular-decorators.component.html',
  styleUrl: './angular-decorators.component.scss',
})
export class AngularDecoratorsComponent {
  mess: string = 'lasha';

  logLength(size: number) {
    console.log(size);
  }
}
