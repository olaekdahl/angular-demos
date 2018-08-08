import { Injectable } from '@angular/core';
import { IProduct } from './structural/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
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
