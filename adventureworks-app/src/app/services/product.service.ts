import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { products } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }

  deleteProduct(id: number): void {
    this.http.delete(`/api/products/${id}`).subscribe();
  }

  addProduct(product: IProduct): void {
    this.http.post(`/api/products`, product).subscribe();
  }
}
