import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter'
import { PopupExpenseBoxComponent } from '../popup-expense-box/popup-expense-box.component';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';

import {default as _rollupMoment, Moment} from 'moment';
import { ExpenseIncomeService } from 'src/app/service/expense-income.service';
import { UserService } from 'src/app/service/user.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'expense-tracker-options',
  templateUrl: './expense-tracker-options.component.html',
  styleUrls: ['./expense-tracker-options.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ExpenseTrackerOptionsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private expenseService: ExpenseIncomeService,
    private userService: UserService
  ) { }

  filterExpenseForm = new FormGroup({
    month: new FormControl('')
  })

  ngOnInit() { }

  date = new FormControl(moment());

  openDialogBox() {
    this.dialog.open(PopupExpenseBoxComponent, {
      width: '800px'
    })
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();

    let date = this.date.value
    this.expenseService.get(date)
  }
}
