import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  feData$: Observable<any> | undefined;
  load = false;
  constructor(private http: HttpClient) {}

  getData() {
    this.feData$ = this.http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        map((data: any) => {
          const mappedVAlues = Object.values(data.bpi).map((currency: any) => ({
            code: currency.code,
            description: currency.description,
            rate: currency.rate,
            rate_float: currency.rate_float,
            symbol: currency.symbol,
          }));
          return {
            ...data,
            currency: mappedVAlues,
          };
        })
      );

    this.load = true;
  }
}
