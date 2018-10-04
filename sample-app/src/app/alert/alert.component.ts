import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() msg: string;
  @Output() readEvent = new EventEmitter();

  onRead(){
    this.readEvent.emit(`The message was read!`);
  }

  constructor() { }

  ngOnInit() {
  }

}
