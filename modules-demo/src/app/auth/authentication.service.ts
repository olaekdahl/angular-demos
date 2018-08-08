import { Injectable } from '@angular/core';
import { IAuthentication } from './IAuthentication';
import { AuthImpl } from "./AuthImpl";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthenticationService extends AuthImpl {

  constructor() { super(); }

  login(userName: string, password: string): boolean {
    if (userName === "admin" && password === "pass") {
      return true;
    } else {
      return false;
    }
  }
}
