import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import {ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component'
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path :'', component: LoginComponent },
  { path :'login', component: LoginComponent },
  { path :'home', component: ExpenseTrackerComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
