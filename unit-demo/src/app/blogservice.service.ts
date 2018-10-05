import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor() { }

  getBlog(id:number): string {
    return `/blogs/angular/${id}`;
  }
}
