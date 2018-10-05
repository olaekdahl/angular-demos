import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemosModule } from './demos/demos.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { PopularPipe } from './shared/popular.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    DemosModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    //CheckoutModule,
    BrowserAnimationsModule,
    PopularPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
