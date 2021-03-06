import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AuthenticationService, AuthenticationServiceUnit } from './auth/authentication.service';
import { AuthImpl } from "./auth/AuthImpl";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ShoppingModule
  ],
  providers: [{provide: AuthImpl, useClass: AuthenticationServiceUnit}],
  bootstrap: [AppComponent]
})
export class AppModule { }
