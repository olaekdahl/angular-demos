import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
//   template: `<p>
//   username: <input type="text" [(ngModel)]="username"/><br/>
//   password: <input type="password" [(ngModel)]="password"/><br/>
//   <button (click)="submit()">Login</button>
// </p>
// inline template
// {{ username }}`,
  styleUrls: []
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  username: string = 'Please enter a username';
  password: string;
  vacation:Date = new Date();
  isDisabled: boolean = false;
  today: Date = new Date();
  @Input() msg: string;
  @Output() msgChange = new EventEmitter();

  constructor() { }

  submit(): void {
    console.log(`The button was clicked and the username is ${this.username}`);
    // if (this.isDisabled) {
    //   this.isDisabled = false;
    // } else {
    //   this.isDisabled = true;
    // }
    this.isDisabled = !this.isDisabled;
  }

  onChange(): void {
    this.msgChange.emit(this.username);
  }

  ngOnInit() {
    console.log('inside init');
  }

}
