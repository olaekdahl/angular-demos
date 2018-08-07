import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isBordered: boolean = false;
  showDiv: boolean = true;
  constructor() { }

  onClick() {
    console.log('inside click...')
    this.showDiv = !this.showDiv;
    this.isBordered = !this.isBordered;
  }
  
  ngOnInit() {
  }

}
