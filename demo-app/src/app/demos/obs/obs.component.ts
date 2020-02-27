import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor() { }

  nums = [1,2,3];
  n: number;

  addNum() {
    this.nums.push(this.n);
  }

  ngOnInit() {
    //create simple observable

    let numbers$ = of(this.nums);

    numbers$.subscribe((data) => {
      console.log(data);
    });

    //operators
    //map
    //let mapFunc = map((data: number) => data * 2);
    let mapFunc = map((data: number[]) => `The value is ${data}`);

    mapFunc(numbers$).subscribe((data) => {
      console.log(data);
    });

    //pipe
    let pipeFunc = numbers$.pipe(
      map(data => data.forEach(x=>x*2)),
      map(data => `The value is ${data}`)
    );


    pipeFunc.subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err)
      });

  }
}
