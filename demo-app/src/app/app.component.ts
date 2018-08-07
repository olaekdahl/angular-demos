import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
// <app-fancy-text></app-fancy-text>
// `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data value from parent...';
  msgFromChild: string;

  onValueChange(event: string) {
    this.msgFromChild = event;
  }
}
