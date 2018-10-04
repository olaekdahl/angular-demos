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
import { RestClientComponent } from './rest-client/rest-client.component';
import { ChatclientComponent } from './chatclient/chatclient.component';
import { FooComponent } from './foo/foo.component';
import { HttpParallelComponent } from './http-parallel/http-parallel.component';
import { HttpbasicComponent} from './httpbasic/httpbasic.component';

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
    DetailComponent,
    RestClientComponent,
    ChatclientComponent,
    FooComponent,
    HttpbasicComponent,
    HttpParallelComponent
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
    DetailComponent,
    RestClientComponent,
    ChatclientComponent,
    HttpbasicComponent,
    HttpParallelComponent
  ]
})
export class DemosModule { }
