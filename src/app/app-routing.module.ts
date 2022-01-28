import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mycomponent/dashboard/dashboard.component';
import { FormComponent } from './Mycomponent/form/form.component';
import { HomeComponent } from './Mycomponent/home/home.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path :''
  },
  {
    component:FormComponent,
    path :'form'
  },
  {
    component:FormComponent,
    path :'form/:employeeId'
  },
  {
    component:DashboardComponent,
    path :'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
