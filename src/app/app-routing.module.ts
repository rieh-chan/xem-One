import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes=[
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"",
    component: HeroesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
