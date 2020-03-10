import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material'
import { MatDialog } from '@angular/material/dialog'

import { ExpenseIncomeService } from '../../service/expense-income.service'
import { ExpenseData } from '../../service/expense-income.service'
import { PopupExpenseBoxComponent } from '../popup-expense-box/popup-expense-box.component'

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income : number = 0

  @Input() incomeData : ExpenseData[]

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator

  @ViewChild(MatSort,{ static: true }) sort: MatSort

  dataSource : MatTableDataSource<ExpenseData>
  
  displayedColumns : string[] = ['Date','Category','Amount','Edit']
  
  constructor(private expenseIncomeService: ExpenseIncomeService, private dialog: MatDialog){ }

  ngOnInit(){ }

  ngOnChanges(){
    if(this.incomeData != undefined){
      this.incomeData = this.incomeData.filter(data => data.Type === 'Income')
      
      this.dataSource = new MatTableDataSource(this.incomeData)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      
      this.income = this.sumOfAmount('Amount')
    }
  }

  sumOfAmount(key){
    return this.incomeData.reduce((a,b) => a+ (b[key] || 0), 0)
  }

  editIncome(id){
    this.expenseIncomeService.getExpense(id)
    .subscribe((res) =>{
      this.dialog.open(PopupExpenseBoxComponent,{
        width: '800px',
        data: res.json().data
      })
    })
  }
}