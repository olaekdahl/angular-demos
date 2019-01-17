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

  cahceList: number[];

  //return of(cacheList)

  ngOnInit() {
    //create simple observable
    let numbers$ = of(1, 2, 3);
    //let numbers$ = of('Hello');
    numbers$.subscribe((data) => {
      console.log(data);
    });

    //operators
    //map
    //let mapFunc = map((data: number) => data * 2);
    let mapFunc = map((data: number) => `The value is ${data}`);

    mapFunc(numbers$).subscribe((data) => {
      console.log(data);
    });

    //pipe
    let pipeFunc = numbers$.pipe(
      map(data => data * 2),
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
