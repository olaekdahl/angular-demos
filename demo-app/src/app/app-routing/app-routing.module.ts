import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'
import { WelcomeComponent } from '../welcome/welcome.component';
import { PipesComponent } from '../demos/pipes/pipes.component';
import { DetailComponent } from '../demos/detail/detail.component';
import { ProuctDetailGuard } from './prouct-detail.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: PipesComponent},
      {path: 'products/:pid', canActivate: [ProuctDetailGuard], component: DetailComponent},
      {path: 'checkout', loadChildren:"src/app/checkout/checkout.module#CheckoutModule"}
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
