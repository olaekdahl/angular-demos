import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  products: IProduct[];
  switchProp:number = 4;
  constructor() { }

  async ngOnInit() {
    await delay(1000);
    this.products = this.getProducts();
  }

  getProducts(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Blue Bike",
        "price": 99.99,
        "stockDate": new Date(1310669017000),
        "popular": true
    },
    {
        "productId": 2,
        "productName": "Yellow Helmet",
        "price": 29.99,
        "stockDate": new Date(1310669017000),
        "popular": true
    },
    {
        "productId": 3,
        "productName": "Red Helmet",
        "price": 19.99,
        "stockDate": new Date(1310669017000),
        "popular": true
    }

    ]
  }
}


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}