import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { UnitformComponent } from './unitform/unitform.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitformComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
