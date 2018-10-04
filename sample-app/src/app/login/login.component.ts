import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  statusText: string = 'msg from parent';
  isDisabled: boolean = false;
  isRed: boolean = false;

  today: Date = new Date();

  msg: string;

  domains = [{
                  id: 1,
                  name: "adventureworks"
                }, {
                  id: 2,
                  name: "northwind"
                }];
  domainOption;

  onClick() {
    console.log(`The login button was clicked and the username is: ${this.username}`);
    this.isDisabled = !this.isDisabled;
    this.isRed = !this.isRed;
  }
  constructor() { }

  ngOnInit() {
    console.log('inside onInit...');
  }

  onRead(event: string){
    this.msg = event; 
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
