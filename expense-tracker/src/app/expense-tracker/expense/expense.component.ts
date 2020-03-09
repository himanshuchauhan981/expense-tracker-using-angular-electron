import { Component, OnInit, Input } from '@angular/core';

import { ExpenseData } from '../../service/expense-income.service'

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  expense : number  = 0

  @Input() expenseData : ExpenseData[]

  ngOnInit() { }

  ngOnChanges(){
    if(this.expenseData != undefined){
      this.expenseData = this.expenseData.filter(data => data.Type === 'Expense')
      this.expense = this.sumOfAmount('Amount')
    }
  }

  sumOfAmount(key:string){
    return this.expenseData.reduce((a,b) => a+ (b[key] || 0), 0)
  }

}
