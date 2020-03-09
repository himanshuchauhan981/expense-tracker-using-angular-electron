import { Component, OnInit } from '@angular/core'

import { ExpenseIncomeService,ExpenseData } from '../service/expense-income.service'

@Component({
  selector: 'expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {


  constructor(private expenseService: ExpenseIncomeService ) {

  }
  
  userExpense : ExpenseData[]
  
  ngOnInit(){ 
    this.expenseService.get().subscribe(res =>{
      this.userExpense = res.json().data
    })
    
  }  
}
