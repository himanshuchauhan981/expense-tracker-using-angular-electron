import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { map,startWith } from 'rxjs/operators'
import { MatTabChangeEvent } from '@angular/material'
import { MatDialogRef } from '@angular/material/dialog'

import { CategoryService, Category } from '../../service/category.service'
import { ExpenseIncomeService } from '../../service/expense-income.service'
import { UserService } from '../../service/user.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'popup-expense-box',
  templateUrl: './popup-expense-box.component.html',
  styleUrls: ['./popup-expense-box.component.css']
})
export class PopupExpenseBoxComponent implements OnInit {

  tabHeading : string = 'Income'

  filteredCategory : Observable<Category[]>

  expenseForm = new FormGroup({
    Date : new FormControl('',Validators.required),
    Category : new FormControl('',Validators.required),
    Amount : new FormControl('',Validators.required),
    Notes :  new FormControl(''),
    PaymentMethod : new FormControl('',Validators.required),
    Payee : new FormControl('',Validators.required)
  })
  
  paymentMethod = ['Cash','Credit','Debit']

  constructor(
    private dialogRef : MatDialogRef<PopupExpenseBoxComponent>,
    private categoryService: CategoryService,
    private expenseIncomeService: ExpenseIncomeService,
    private userService: UserService
  ) { }

  ngOnInit(){
    this.categoryService.get()
    
    this.filteredCategory = this.expenseForm.get('Category').valueChanges
    .pipe(
      startWith(''),
      map(value => value.length >=1 ? this.categoryService.filterList(value,this.tabHeading): [])
    )
  }

  public selectedTab(tabChangeEvent: MatTabChangeEvent): void{
    if(tabChangeEvent['index'] === 1) this.tabHeading = 'Expense'
    else this.tabHeading = 'Income'

    this.expenseForm.reset()
  }

  closePopUp(){
    this.dialogRef.close()
  }

  submit(expenseForm){
    let userId = this.userService.getUserID
    this.expenseIncomeService.post(expenseForm.value,userId)
      .subscribe((res) =>{
        console.log(res.json())
      })
  }

  addNew(){
    let newCategory = this.expenseForm.get('Category').value
    this.categoryService.addNew(newCategory,this.tabHeading)
    this.expenseForm.get('Category').setValue(newCategory)
  }
}
