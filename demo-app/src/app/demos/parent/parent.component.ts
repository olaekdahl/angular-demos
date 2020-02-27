import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentState:string;
  childState: string;

  onValueChange(event: string) {
    this.childState = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
