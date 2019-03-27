import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/layout/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CheckinComponent } from './views/availability/checkin/checkin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:MainComponent,
    children:[
    { 
       path:'',component:DashboardComponent
    },{
      path:'checkin',component:CheckinComponent
    }
    ]   
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
