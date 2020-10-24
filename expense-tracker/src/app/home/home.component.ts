import { Component, OnInit, ViewChild } from '@angular/core'

import { ExpenseIncomeService } from '../service/expense-income.service'
import { ExpenseTrackerOptionsComponent } from './expense-tracker-options/expense-tracker-options.component';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public expenseService: ExpenseIncomeService) { }

  @ViewChild(ExpenseTrackerOptionsComponent, { static: true }) options: ExpenseTrackerOptionsComponent


  ngOnInit() {
    let date = this.options.date.value
    this.expenseService.get(date)
  }
}
