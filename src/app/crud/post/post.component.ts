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
      id: 8,
      name: 'ABC',
      age: 100,
    };
    this.http.post('http://localhost:3000/users', user).subscribe((res) => {
      console.log(res);
    });
  }

  putData() {
    const user = {
      id: '9',
      name: 'onlynine',
      age: 21,
    };
    this.http.put(`http://localhost:3000/users/9`, user).subscribe((res) => {
      console.log(res);
    });
  }
}
