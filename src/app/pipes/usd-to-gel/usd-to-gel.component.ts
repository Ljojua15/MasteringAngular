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
  img: string =
    'https://w7.pngwing.com/pngs/386/187/png-transparent-computer-icons-blog-change-angle-text-logo-thumbnail.png';
  usd: any = 0;
  gel: any = 0;
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

  onInputChange(value: number) {
    if (this.selected) {
      this.gel = value;
    } else {
      this.usd = value;
    }
  }
}
