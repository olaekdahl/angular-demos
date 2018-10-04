import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { delay } from 'q';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage: boolean = true;
  products: IProduct[];

  selectedPage: number = 1;

  next(){
    this.selectedPage++;
  }

  // getProducts(): IProduct[] {
  //   return [{ id: 1, name: "Black Bike", price: 189 }, 
  //           { id: 2, name: "Yellow Bike", price: 289 }, 
  //           { id: 3, name: "Red Bike", price: 89 }]
  // }
  click() {
    this.showMessage = !this.showMessage;
  }

  delete(product) {
    this.products = this.products.filter(p => p.name !== product.name);
  }
  constructor(private ps: ProductService) { }

  async ngOnInit() {
    await delay(1000)
    this.products = this.ps.getProducts();
  }

}
