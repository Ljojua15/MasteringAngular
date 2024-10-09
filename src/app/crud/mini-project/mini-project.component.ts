import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mini-project',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './mini-project.component.html',
  styleUrl: './mini-project.component.scss',
})
export class MiniProjectComponent {}
