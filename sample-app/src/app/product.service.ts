import { Injectable } from '@angular/core';
import { IProduct } from './products/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): IProduct[] {
      return [{ id: 1, name: "Black Bike", price: 189 }, 
              { id: 2, name: "Yellow Bike", price: 289 }, 
              { id: 3, name: "Red Bike", price: 89 },
              { id: 4, name: "Blue Bike", price: 89 }]
    }
}
