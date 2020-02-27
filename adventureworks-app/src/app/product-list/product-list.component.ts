import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { ProductService } from '../services/product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

class Product implements IProduct {
  id;
  name;
  price;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:IProduct[];
  product: IProduct = new Product();
  swapi;

  onSubmit(productForm) {
    this.products.push(this.product);
    this.ps.addProduct(this.product);
  }

  constructor(private ps: ProductService, private http: HttpClient) { }

  onDelete(product: IProduct) {
    if(confirm('Are you sure?')) {
      this.products = this.products.filter(p=>p.id !== product.id);
      this.ps.deleteProduct(product.id);
    }
  }

  ngOnInit() {
    console.log('init...');
    // this.ps.getProducts().subscribe(result => {
    //   this.products = result;
    // },
    // (error: HttpErrorResponse) => alert(JSON.stringify(error)));

    let data = this.ps.getProducts().pipe(retry(3), catchError(err => throwError(err)));
    
    data.subscribe((result: IProduct[]) => {
      this.products = result;
    }, (error: HttpErrorResponse) => alert(JSON.stringify(error)));
    
    
    // this.http.get('https://swapi.co/api/people/1/').subscribe(result => {
    //   this.swapi = result;
    // });
  }

}
