import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductsModule } from '../../../modules/products/products.module';
import { Products } from '../../../interfaces/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsModule, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductsService],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];

  constructor(private prodactService: ProductsService) {}

  ngOnInit(): void {
    this.getcompProducts();
  }

  getcompProducts() {
    this.prodactService.getProducts().subscribe((res) => {
      console.log(res);

      this.products = res;
    });
  }
}
