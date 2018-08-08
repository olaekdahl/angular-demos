import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import * as d from './demos';
import { DemosModule } from './demos/demos.module';
import { AppComponent } from './app.component';
import { HttpbasicComponent } from './httpbasic/httpbasic.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpbasicComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
