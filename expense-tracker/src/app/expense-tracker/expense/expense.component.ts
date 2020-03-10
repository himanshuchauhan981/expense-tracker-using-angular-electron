import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource, MatDialog } from '@angular/material'

import { ExpenseData, ExpenseIncomeService } from '../../service/expense-income.service'
import { PopupExpenseBoxComponent } from '../popup-expense-box/popup-expense-box.component'

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private expenseIncomeService: ExpenseIncomeService, private dialog: MatDialog) { }

  expense : number  = 0

  @Input() expenseData : ExpenseData[]

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator

  @ViewChild(MatSort,{ static: true }) sort: MatSort

  dataSource : MatTableDataSource<ExpenseData>
  
  displayedColumns : string[] = ['Date','Category','Amount','Edit']

  ngOnChanges(){
    if(this.expenseData != undefined){
      this.expenseData = this.expenseData.filter(data => data.Type === 'Expense')

      this.dataSource = new MatTableDataSource(this.expenseData)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

      this.expense = this.sumOfAmount('Amount')
    }
  }

  ngOnInit(){
    this.expenseIncomeService.dataChange.subscribe((res:any) =>{
      if(res.length != 0 && res.Type == 'Expense'){
        if(res.msg === 'SAVE_EXPENSE'){
          this.addExpense(res)
        }
        else if(res.msg === 'UPDATE_EXPENSE'){
          this.updateExpense(res)
        }
        this.expense = this.sumOfAmount('Amount')
      }
    })
  }

  sumOfAmount(key:string){
    return this.expenseData.reduce((a,b) => a+ (b[key] || 0), 0)
  }

  editExpense(id){
    this.expenseIncomeService.getExpense(id)
    .subscribe((res) =>{
      this.dialog.open(PopupExpenseBoxComponent,{
        width: '800px',
        data: res.json().data
      })
    })
  }

  addExpense(data){
    this.dataSource.data.push(data)
    this.dataSource.data = this.dataSource.data
  }

  updateExpense(data : ExpenseData){
    this.dataSource.data = this.dataSource.data.filter((value,key) =>{
      if(value._id === data._id){
        value.Category = data.Category
        value.Date = data.Date
        value.Amount = data.Amount
      }
      return true
    })
  }

}
