import { Injectable } from '@angular/core';
import { IProduct } from './structural/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}
  
  getProducts(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Blue Bike",
        "price": 9999.99999,
        "stockDate": new Date(1310669017000),
        "popular": true
    },
    {
        "productId": 2,
        "productName": "Yellow Helmet",
        "price": .99,
        "stockDate": new Date(1310669017000),
        "popular": false
    },
    {
        "productId": 3,
        "productName": "Red Helmet",
        "price": 19.99,
        "stockDate": new Date(1310669017000),
        "popular": false
    }
    ]
  }
}
