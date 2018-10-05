import { Component, OnInit, LOCALE_ID, HostBinding } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../structural/product';
import { Animations } from '../../shared/animations';
import { StateService } from '../../services/state.service';

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

  msg: string;
  data: string;
  
  private _filter: string;
  set filter(value: string) {
    this.msg = value;
    this.filterData(value);
  }
  errorMsg: string;
  constructor(private ps: ProductsService, private stateService: StateService) { 
    this.products = ps.getProducts();
  }

  addData(){
    console.log(`pushing to array: ${this.data}`)
    this.stateService.addData(this.data);
  }

  filterData(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().lastIndexOf(filter) !== -1);
  }

  ngOnInit() {
    this.data = this.stateService.getData();
  }

}
