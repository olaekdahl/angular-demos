import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as d from './demos';
import { DemosModule } from './demos/demos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // d.LoginComponent,
    // d.DirectivesComponent,
    // d.ImportantTextDirective,
    // d.StructuralComponent,
    // d.FormsTemplateComponent,
    // d.FormsModelComponent
  ],
  imports: [
    BrowserModule,
    DemosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
