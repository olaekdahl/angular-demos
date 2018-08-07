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


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}