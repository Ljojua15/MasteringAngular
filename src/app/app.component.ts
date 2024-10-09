import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lesson1Component } from './lesson-1/lesson-1.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { AngularDecoratorsComponent } from './angular-decorators/angular-decorators.component';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    Lesson1Component,
    AngularDirectivesComponent,
    LifecycleHooksComponent,
    AngularDecoratorsComponent,
    CrudComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
