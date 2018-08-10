import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  exports: [
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent
  ] 
})
export class CheckoutModule { }
