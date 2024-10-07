import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  feData$: Observable<any> | undefined;
  load = false;
  constructor(private http: HttpClient) {}

  getData() {
    this.feData$ = this.http.get('https://catfact.ninja/fact');
    console.log(this.feData$);

    this.load = true;
  }
}
