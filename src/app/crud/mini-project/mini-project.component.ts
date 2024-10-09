import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-mini-project',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AddComponent],
  templateUrl: './mini-project.component.html',
  styleUrl: './mini-project.component.scss',
  providers: [ProductsService],
})
export class MiniProjectComponent {
  constructor(private http: HttpClient) {}
}
