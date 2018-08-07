import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ImportantTextDirective } from './directives/important.text.directive';
import { StructuralComponent } from './structural/structural.component';
import { FormsTemplateComponent } from './forms-template/forms.component';
import { FormsModelComponent } from './forms-model/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectivesComponent,
    ImportantTextDirective,
    StructuralComponent,
    FormsTemplateComponent,
    FormsModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
