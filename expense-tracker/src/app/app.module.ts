import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { StorageServiceModule } from 'angular-webstorage-service'
import { ChartsModule } from 'ng2-charts'

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
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { ExpenseComponent } from './expense-tracker/expense/expense.component';
import { IncomeComponent } from './expense-tracker/income/income.component';
import { OptionsComponent } from './expense-tracker/options/options.component';
import { MatNativeDateModule } from '@angular/material';
import { PopupExpenseBoxComponent } from './expense-tracker/popup-expense-box/popup-expense-box.component';
import { SignupComponent } from './signup/signup.component';
import { DeleteDialogComponent } from './expense-tracker/delete-dialog/delete-dialog.component';
import { ExpenseChartComponent } from './expense-tracker/expense-chart/expense-chart.component';
import { IncomeChartComponent } from './expense-tracker/income-chart/income-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpenseTrackerComponent,
    ExpenseComponent,
    IncomeComponent,
    OptionsComponent,
    PopupExpenseBoxComponent,
    SignupComponent,
    DeleteDialogComponent,
    ExpenseChartComponent,
    IncomeChartComponent
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
    StorageServiceModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    ChartsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupExpenseBoxComponent,
    DeleteDialogComponent
  ]
})
export class AppModule { }
