import { Component, OnInit,ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';

import { PopupExpenseBoxComponent } from './popup-expense-box/popup-expense-box.component'
import { ExpenseIncomeService,ExpenseData } from '../service/expense-income.service'


@Component({
  selector: 'expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {


  constructor(private expenseService: ExpenseIncomeService,private dialog: MatDialog) { }
  
  userExpense : ExpenseData[]
  
  ngOnInit(){ 
    
    this.getUserExpense()
    this.expenseService.submitEvent.subscribe((res) =>{
      if(res){
        this.getUserExpense()
      }
    })
  }
  
  getUserExpense(){
    this.expenseService.get().subscribe(res =>{
      this.userExpense = res.json().data
    })
  }
}
