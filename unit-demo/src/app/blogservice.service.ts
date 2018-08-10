import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor() { }

  getBlog(): string {
    return 'blah blah blah...';
  }
}
