import { Component, OnInit } from '@angular/core'

import { ExpenseIncomeService } from '../service/expense-income.service'

@Component({
  selector: 'expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  constructor(private expenseService: ExpenseIncomeService) { }

  ngOnInit(){ }

  
}
