import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private Url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Products[]>(this.Url);
  }

  addProduct(newPro: Products) {
    return this.http.post<Products>(this.Url, newPro);
  }
}
