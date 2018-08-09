import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ImportantTextDirective } from './directives/important.text.directive';
import { StructuralComponent } from './structural/structural.component';
import { FormsTemplateComponent } from './forms-template/forms.component';
import { FormsModelComponent } from './forms-model/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { DiDemoComponent } from './di-demo/di-demo.component';
import { PipesComponent } from './pipes/pipes.component';
import { PopularPipe } from './popular.pipe';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    DirectivesComponent,
    ImportantTextDirective,
    StructuralComponent,
    FormsTemplateComponent,
    FormsModelComponent,
    DiDemoComponent,
    PipesComponent,
    PopularPipe,
    DetailComponent
  ],
  exports: [
    LoginComponent,
    DirectivesComponent,
    ImportantTextDirective,
    StructuralComponent,
    FormsTemplateComponent,
    FormsModelComponent,
    DiDemoComponent,
    PipesComponent,
    PopularPipe,
    DetailComponent
  ]
})
export class DemosModule { }
