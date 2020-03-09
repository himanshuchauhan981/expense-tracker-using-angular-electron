import { Component, OnInit, Input } from '@angular/core';

import { ExpenseData } from '../../service/expense-income.service'

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  constructor() { }

  income : number = 0

  @Input() incomeData : ExpenseData[] 

  ngOnInit() { }

  ngOnChanges(){
    if(this.incomeData != undefined){
      this.incomeData = this.incomeData.filter(data => data.Type === 'Income')
      
      this.income = this.sumOfAmount('Amount')
    }
  }

  sumOfAmount(key){
    return this.incomeData.reduce((a,b) => a+ (b[key] || 0), 0)
  }
  
}