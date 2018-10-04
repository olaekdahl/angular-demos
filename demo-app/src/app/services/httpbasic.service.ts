import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from '../demos/structural/product';

@Injectable({
  providedIn: 'root'
})
export class HttpbasicService {
  url = 'http://localhost:8989/assets/products.json'
  
  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    let data = this.http.get<IProduct[]>(this.url).pipe(
      tap(data => console.log('Data from service ' + JSON.stringify(data)))
    );
    return data;
  }
}
