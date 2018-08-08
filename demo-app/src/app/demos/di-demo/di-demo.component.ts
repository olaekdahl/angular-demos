import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../structural/product';

@Component({
  selector: 'app-di-demo',
  templateUrl: './di-demo.component.html',
  styleUrls: ['./di-demo.component.css']
})
export class DiDemoComponent implements OnInit {

  products: IProduct[];
  constructor(private ps: ProductsService) { 
    this.products = ps.getProducts();
  }

  ngOnInit() {
  }

}
