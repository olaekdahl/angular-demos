import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'angular-dropdown-component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlertComponent } from './alert/alert.component';
import { DirComponent } from './dir/dir.component';
import { ImportantTextDirective } from './dir/important.text.directive';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    DirComponent,
    ImportantTextDirective,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
