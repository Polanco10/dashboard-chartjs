import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
