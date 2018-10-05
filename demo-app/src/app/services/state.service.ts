import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  data: string[] = [];

  constructor() { }

  addData(val: string){
    this.data.push(val);
  }

  getData(){
    return this.data[0];
  }
}
