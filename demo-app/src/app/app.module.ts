import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import * as d from './demos';
import { DemosModule } from './demos/demos.module';
import { AppComponent } from './app.component';
import { HttpbasicComponent } from './httpbasic/httpbasic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HttpbasicComponent,
    WelcomeComponent
    // d.LoginComponent,
    // d.DirectivesComponent,
    // d.ImportantTextDirective,
    // d.StructuralComponent,
    // d.FormsTemplateComponent,
    // d.FormsModelComponent
  ],
  imports: [
    BrowserModule,
    DemosModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
