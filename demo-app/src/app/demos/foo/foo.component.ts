import { Component, OnInit } from '@angular/core';
import { HttpbasicService } from '../../services/httpbasic.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private http: HttpbasicService) { }

  ngOnInit() {
    this.http.getData().subscribe(data => console.log(data));
  }

  test(a:number,b:number):number {
    return a+b;
  }

}
