import { Injectable } from '@angular/core';
import { IAuthentication } from './IAuthentication';
import { AuthImpl } from "./AuthImpl";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AuthImpl {

  constructor() { super(); }

  login(userName: string, password: string): boolean {
    console.log('from AuthenticationService');
    if (userName === "admin" && password === "pass") {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceUnit extends AuthImpl {

  constructor() { super(); }

  login(userName: string, password: string): boolean {
    console.log('from AuthenticationServiceUnit');
    if (userName === "admin" && password === "pass") {
      return true;
    } else {
      return false;
    }
  }
}
