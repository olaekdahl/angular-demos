import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() input: string;
  @Output() output = new EventEmitter();
  childData: string;
  
  onChange(): void {
    this.output.emit(this.childData);
  }
  constructor() { }

  ngOnInit() {
  }

}
