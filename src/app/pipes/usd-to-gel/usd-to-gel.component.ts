import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usd-to-gel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usd-to-gel.component.html',
  styleUrl: './usd-to-gel.component.scss',
})
export class UsdToGelComponent {
  usd: number = 0;
  gel: number = 0;
  selected: boolean = false;
  convert() {
    if (!this.selected) {
      this.gel = parseFloat((this.usd * 2.72).toFixed(2));
    } else {
      this.usd = parseFloat((this.gel / 2.72).toFixed(2));
    }
  }
  changeCurr() {
    this.selected = !this.selected;
  }
}
