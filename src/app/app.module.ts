import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Mycomponent/form/form.component';
import { DashboardComponent } from './Mycomponent/dashboard/dashboard.component';
import { HomeComponent } from './Mycomponent/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
