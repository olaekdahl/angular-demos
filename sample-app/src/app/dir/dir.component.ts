import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  isBordered: boolean = false;
  hideDiv: boolean = false;

  onClick(){
    this.isBordered = !this.isBordered;
    this.hideDiv = !this.hideDiv;
  }

  constructor() { }

  ngOnInit() {
  }

}
