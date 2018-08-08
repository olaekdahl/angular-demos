import { Injectable } from '@angular/core';
import { IProduct } from './structural/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = '/assets/products.json'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  xgetProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: "Blue Bike"
      },
      {
        productId: 2,
        productName: "Yellow Helmet"
      },
      {
        productId: 3,
        productName: "Red Helmet"
      }

    ]
  }
}
