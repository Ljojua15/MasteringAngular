import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { travelDestinations } from './coursess';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  date: Date = new Date();
  travelDestinations = travelDestinations;
  pageSize: number = 6;
  start: number = 0;
  end: number = this.pageSize;

  disable: boolean = true;

  constructor() {
    console.log(this.travelDestinations);
  }

  next() {
    this.start += this.pageSize;
    this.end += this.pageSize;
  }
  back() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    console.log('sdasd');
  }
}
