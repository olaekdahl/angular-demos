import { Component } from '@angular/core';
import { style, animate, transition, state, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   template: `
  // <app-fancy-text></app-fancy-text>
  // `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('buttontrigger', [
      state('active', style({  'background-color': 'green' })),
      state('inactive', style({ 'background-color': 'red' })),
      transition('active => inactive', animate('400ms')),
      transition('inactive => active', animate('400ms'))
    ])
  ]
})
export class AppComponent {
  title = 'Data value from parent...';
  msgFromChild: string;
  btn_state: string = 'active';
  toggle() {
    this.btn_state =
      (this.btn_state === 'active') ? 'inactive' : 'active';
  }

  onValueChange(event: string) {
    this.msgFromChild = event;
  }
}
