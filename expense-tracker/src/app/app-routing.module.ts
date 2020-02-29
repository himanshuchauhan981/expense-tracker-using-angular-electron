import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';


const routes: Routes = [
  { path :'', component: LoginComponent },
  { path :'home', component: ExpenseTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
