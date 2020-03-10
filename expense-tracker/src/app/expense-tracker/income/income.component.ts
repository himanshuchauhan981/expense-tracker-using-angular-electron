import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { ExpenseIncomeService } from '../../service/expense-income.service'
import { ExpenseData } from '../../service/expense-income.service'
import { PopupExpenseBoxComponent } from '../popup-expense-box/popup-expense-box.component'
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component'

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
  
  displayedColumns : string[] = ['Date','Category','Amount','Edit','Remove']
  
  constructor(
    private expenseIncomeService: ExpenseIncomeService,
    private dialog: MatDialog
  ){ }

  ngOnChanges(){
    if(this.incomeData != undefined){
      this.incomeData = this.incomeData.filter(data => data.Type === 'Income')
      
      this.dataSource = new MatTableDataSource(this.incomeData)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      
      this.income = this.sumOfAmount('Amount')
    }
  }

  ngOnInit(){
    this.expenseIncomeService.dataChange.subscribe((res:any) =>{
      if(res !== undefined){
        if(res.length != 0 && res.Type == 'Income'){
          if(res.msg === 'SAVE_INCOME'){
            this.addIncome(res)
          }
          else if(res.msg === 'UPDATE_INCOME'){
            this.updateIncome(res)
          }
          this.income = this.sumOfAmount('Amount')
        }
      }
      
    })

    this.expenseIncomeService.deleteChange.subscribe((id:any) =>{
      if(id != ''){
        this.dataSource.data = this.dataSource.data.filter((value,key) =>{
          return value._id != id
        })
      }
    })
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

  addIncome(data){
    this.dataSource.data.push(data)
    this.dataSource.data = this.dataSource.data
  }

  updateIncome(data : ExpenseData){
    this.dataSource.data = this.dataSource.data.filter((value,key) =>{
      if(value._id === data._id){
        value.Category = data.Category
        value.Date = data.Date
        value.Amount = data.Amount
      }
      return true
    })
  }

  deleteIncome(id){
    this.dialog.open(DeleteDialogComponent,{
      width: '300px',
      data: id
    })
  }
}