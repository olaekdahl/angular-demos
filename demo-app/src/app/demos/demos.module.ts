import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ImportantTextDirective } from './directives/important.text.directive';
import { StructuralComponent } from './structural/structural.component';
import { FormsTemplateComponent } from './forms-template/forms.component';
import { FormsModelComponent } from './forms-model/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiDemoComponent } from './di-demo/di-demo.component';
import { PipesComponent } from './pipes/pipes.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RestClientComponent } from './rest-client/rest-client.component';
import { ChatclientComponent } from './chatclient/chatclient.component';
import { FooComponent } from './foo/foo.component';
import { HttpParallelComponent } from './http-parallel/http-parallel.component';
import { HttpbasicComponent} from './httpbasic/httpbasic.component';
import { HttpbasicService } from '../services/httpbasic.service';
import { SuperBasicHttpComponent } from './super-basic-http/super-basic-http.component';
import { PopularPipe } from '../shared/popular.pipe';
import { ObsComponent } from './obs/obs.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

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
    DetailComponent,
    RestClientComponent,
    ChatclientComponent,
    FooComponent,
    HttpbasicComponent,
    HttpParallelComponent,
    SuperBasicHttpComponent,
    PopularPipe,
    ObsComponent,
    ChildComponent,
    ParentComponent
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
    DetailComponent,
    RestClientComponent,
    ChatclientComponent,
    HttpbasicComponent,
    HttpParallelComponent,
    SuperBasicHttpComponent,
    ObsComponent,
    ParentComponent,
    ChildComponent,
    HttpbasicService
  ]
})
export class DemosModule { }
