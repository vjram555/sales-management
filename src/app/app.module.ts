import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/layout/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CheckinComponent } from './views/availability/checkin/checkin.component';
import { BsDatepickerModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    CheckinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
