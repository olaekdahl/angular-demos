import { Component, OnInit } from '@angular/core';
import { HttpbasicService } from '../httpbasic.service';
import { IProduct } from '../demos/structural/product';

@Component({
  selector: 'app-httpbasic',
  templateUrl: './httpbasic.component.html',
  styleUrls: ['./httpbasic.component.css']
})
export class HttpbasicComponent implements OnInit {
  products: IProduct[];
  private _filter: string;
  errorMsg: string;
  filteredProducts: IProduct[];
  constructor(private http: HttpbasicService) { }

  public set filter(value: string) {
    this.filteredProducts = this.filterData(value);
  }

  ngOnInit() {
    this.http.getData().subscribe(res => this.products = res,
      error => this.errorMsg = <any>error);
      console.log(this.errorMsg);
  }

  filterData(filter: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().lastIndexOf(filter.toLocaleLowerCase()) !== -1);
  }
}
