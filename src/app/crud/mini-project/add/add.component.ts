import { Component } from '@angular/core';
import { Products } from '../../../interfaces/products';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  newProForm: Products = {
    id: '0',
    name: '',
    price: 0,
    quantity: 0,
  };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  addCompProduct() {
    this.productsService.addProduct(this.newProForm).subscribe({
      next: () => {
        this.router.navigate(['home']);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
