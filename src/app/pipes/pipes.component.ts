import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { travelDestinations } from './coursess';
import { UsdToGelComponent } from './usd-to-gel/usd-to-gel.component';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, UsdToGelComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  date: Date = new Date();
  travelDestinations = travelDestinations;
  pageSize: number = 4;
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
  }
}
