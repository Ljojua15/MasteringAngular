import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  constructor(private http: HttpClient) {}

  postData() {
    const user = {
      id: 1,
      name: 'ABC',
      gmail: 'abc@gmail.com',
    };
  }
}
