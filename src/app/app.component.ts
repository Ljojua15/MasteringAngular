import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lesson1Component } from './lesson-1/lesson-1.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
