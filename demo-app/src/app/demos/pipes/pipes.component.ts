import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../structural/product';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  products: IProduct[];
  
  private _filter: string;
  set filter(value: string) {
    this.filterData(value);
  }
  errorMsg: string;
  constructor(private ps: ProductsService) { 
    ps.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMsg = <any>error
    );
    //this.products = ps.getProducts();
  }

  filterData(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().lastIndexOf(filter) !== -1);
  }

  ngOnInit() {
  }

}
