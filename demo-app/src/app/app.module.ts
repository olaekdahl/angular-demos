import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ImportantTextDirective } from './directives/important.text.directive';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectivesComponent,
    ImportantTextDirective,
    FancyTextComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
