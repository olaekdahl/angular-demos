import { Component, OnInit, Optional } from '@angular/core';
import { IProduct } from '../structural/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-di-demo',
  templateUrl: './di-demo.component.html',
  styleUrls: ['./di-demo.component.css']
})
export class DiDemoComponent implements OnInit {
  products: IProduct[];
  
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.products = this.ps.getProducts();
  }
}
