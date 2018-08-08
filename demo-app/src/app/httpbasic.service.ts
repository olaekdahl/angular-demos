import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './demos/structural/product';

@Injectable({
  providedIn: 'root'
})
export class HttpbasicService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8989/assets/products.json');
  }
}
