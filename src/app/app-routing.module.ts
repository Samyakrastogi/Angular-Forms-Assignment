import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateDrivenComponent} from './template-driven/template-driven.component'
import {ReactiveFormComponent} from './reactive-form/reactive-form.component'

const routes: Routes = [
  {
    path :"template" ,
    component : TemplateDrivenComponent
  },
  {
    path :"reactive",
    component : ReactiveFormComponent
  },
  {
    path : "",
    component :TemplateDrivenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
