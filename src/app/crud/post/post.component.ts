import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  id!: string;
  name!: string;
  age!: number;
  userData$!: Observable<any | undefined>;
  constructor(private http: HttpClient) {}

  getData() {
    this.userData$ = this.http
      .get('http://localhost:3000/users')
      .pipe(tap((res) => console.log('Response:', res)));
  }

  postData() {
    const user = {
      id: this.id,
      name: this.name,
      age: this.age,
    };
    this.http.post('http://localhost:3000/users', user).subscribe((res) => {
      console.log(res);
    });
  }

  putData() {
    const user = {
      id: this.id,
      name: this.name,
      age: this.age,
    };
    this.http
      .put(`http://localhost:3000/users/${user.id}`, user)
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteData() {
    const id = this.id;
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe({
      next: () => {
        console.log('deleted');
      },
      error: (err) => {
        console.error('errr', err);
      },
    });
  }
}
