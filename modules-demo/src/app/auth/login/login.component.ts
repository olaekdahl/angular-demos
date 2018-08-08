import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private auth: AuthenticationService) { 
    this.loggedIn = auth.login("admin", "pass1");
  }

  ngOnInit() {
  }

}
