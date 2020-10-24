import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ChartsModule } from 'ng2-charts'
import { NgxElectronModule } from 'ngx-electron';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTabsModule } from '@angular/material/tabs'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpenseDashboardComponent } from './home/expense-dashboard/expense-dashboard.component';
import { IncomeDashboardComponent } from './home/income-dashboard/income-dashboard.component';
import { ExpenseTrackerOptionsComponent } from './home/expense-tracker-options/expense-tracker-options.component';
// import { MatNativeDateModule } from '@angular/material';
import { PopupExpenseBoxComponent } from './home/popup-expense-box/popup-expense-box.component';
import { SignupComponent } from './signup/signup.component';
import { DeleteDialogComponent } from './home/delete-dialog/delete-dialog.component';
import { ExpenseChartComponent } from './home/expense-chart/expense-chart.component';
import { IncomeChartComponent } from './home/income-chart/income-chart.component';
import { ExpenseNavbarComponent } from './expense-navbar/expense-navbar.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExpenseDashboardComponent,
    IncomeDashboardComponent,
    ExpenseTrackerOptionsComponent,
    PopupExpenseBoxComponent,
    SignupComponent,
    DeleteDialogComponent,
    ExpenseChartComponent,
    IncomeChartComponent,
    ExpenseNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSelectModule,
    // NgxWebstorageModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    ChartsModule,
    NgxElectronModule
  ],
  providers: [{
    provide : MatDialogRef,
    useValue : {}
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDialogComponent,
    PopupExpenseBoxComponent,
    
  ]
})
export class AppModule { }
