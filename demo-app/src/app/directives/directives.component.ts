import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isBordered: boolean = false;
  hideDiv: boolean = false;
  constructor() { }

  onClick() {
    console.log('inside click...')
    this.hideDiv = !this.hideDiv;
    this.isBordered = !this.isBordered;
  }
  
  ngOnInit() {
  }

}
