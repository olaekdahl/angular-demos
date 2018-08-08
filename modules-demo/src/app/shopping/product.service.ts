import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shopping/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Yellow bike"
      },
      {
        "productId": 2,
        "productName": "Blue bike"
      }
      ,
      {
        "productId": 3,
        "productName": "Black bike"
      }
    ]
  }
}
