import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material';

import { ExpenseIncomeService, ExpenseData } from '../service/expense-income.service'
import { OptionsComponent } from './options/options.component';
import moment from 'moment';


@Component({
  selector: 'expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {


  constructor(private expenseService: ExpenseIncomeService) { }

  @ViewChild(OptionsComponent, { static: true }) options: OptionsComponent


  ngOnInit() {
    let date = this.options.date.value
    this.expenseService.get(date)
  }
}
