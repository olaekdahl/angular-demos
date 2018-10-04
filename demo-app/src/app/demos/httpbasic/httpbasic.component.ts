import { Component, OnInit } from '@angular/core';
import { IProduct } from '../structural/product';
import { HttpbasicService } from '../../services/httpbasic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpbasic',
  templateUrl: './httpbasic.component.html',
  styleUrls: ['./httpbasic.component.css']
  //providers: [HttpbasicService]
})
export class HttpbasicComponent implements OnInit {
  products: IProduct[];
  errorMsg: string;
  filteredProducts: IProduct[];
  constructor(private http: HttpbasicService) { }
  //constructor(prifilteredProductsvate http:HttpClient){}

  public set filter(value: string) {
    this.filteredProducts = this.filterData(value);
  }

  ngOnInit() {
    this.http.getData().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = products;
      },
      error => this.errorMsg = error);

      console.log(this.errorMsg);
  }

  filterData(filter: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().lastIndexOf(filter.toLocaleLowerCase()) !== -1);
  }
}
