import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[];
  constructor(private prods: ProductService) {}

  ngOnInit() {
    console.log('inside init...');
    this.products = this.prods.getProducts();
  }

  ngOnDestroy(): void {
    console.log('inside destroy...');
    // throw new Error("Method not implemented.");

  }
}
