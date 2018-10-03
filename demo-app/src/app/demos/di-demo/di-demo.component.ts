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
  filter: string;
  //filteredProducts: IProduct[] = this.filter ? this.filterData(this.filter) : this.products;
  errorMsg: string;
  constructor(private ps: ProductsService) { 
    // ps.getProducts().subscribe(
    //   products => this.products = products,
    //   error => this.errorMsg = <any>error
    // );
    this.products = ps.getProducts();
  }

  filterData(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().lastIndexOf(filter) !== -1);
  }

  ngOnInit() {
  }
}
