import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AuthImpl } from '../AuthImpl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private auth: AuthImpl) { 
    this.loggedIn = auth.login("admin", "pass");
  }

  ngOnInit() {
  }

}
