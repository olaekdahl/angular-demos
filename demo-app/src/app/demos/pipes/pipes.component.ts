import { Component, OnInit, LOCALE_ID, HostBinding } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../structural/product';
import { Animations } from '../../shared/animations';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  animations: [Animations.page]
})
export class PipesComponent implements OnInit {
  @HostBinding('@routeAnimation')
  anyProperty = 'anything';
  
  products: IProduct[];
  
  private _filter: string;
  set filter(value: string) {
    this.filterData(value);
  }
  errorMsg: string;
  constructor(private ps: ProductsService) { 
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
