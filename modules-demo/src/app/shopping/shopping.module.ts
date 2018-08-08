import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ],
  declarations: [
    ProductsComponent,
    CheckoutComponent
  ],
  exports: [    
    ProductsComponent,
    CheckoutComponent
  ]
})
export class ShoppingModule { }
