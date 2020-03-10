import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { map,startWith } from 'rxjs/operators'
import { MatTabChangeEvent,MatDialog } from '@angular/material'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

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

  selectTab = new FormControl(0)

  disableIncomeTab : boolean = false

  disableExpenseTab : boolean = false

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
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(){
    this.categoryService.get()
    
    this.filteredCategory = this.expenseForm.get('Category').valueChanges
    .pipe(
      startWith(''),
      map(value => value.length >=1 ? this.categoryService.filterList(value,this.tabHeading): [])
    )

    if(this.data != null){
      this.fillValues()
    }

    this.dialogRef.afterClosed().subscribe(result =>{
      this.expenseIncomeService.dataChange.next(this.expenseIncomeService.getTempData())
    })
  }

  public selectedTab(tabChangeEvent: MatTabChangeEvent): void{
    if(tabChangeEvent['index'] === 1) this.tabHeading = 'Expense'
    else this.tabHeading = 'Income'

    this.expenseForm.markAsUntouched()
    let controls = this.expenseForm.controls
    for(let control in controls){
      controls[control].setValue('')
    }
  }

  closePopUp(){
    this.dialogRef.close()
  }

  submit(expenseForm){
    let userId = this.userService.getUserID()

    expenseForm.value.UserId = userId
    expenseForm.value.Type = this.tabHeading

    if(this.data != null){
      this.expenseIncomeService.put(expenseForm.value,this.data['_id'])
    }
    else{
      this.expenseIncomeService.post(expenseForm.value)
    }
    this.closePopUp()
    // this.expenseIncomeService.fireSubmitEvent()
  }

  addNew(){
    let newCategory = this.expenseForm.get('Category').value
    this.categoryService.addNew(newCategory,this.tabHeading)
    this.expenseForm.get('Category').setValue(newCategory)
  }

  fillValues(){
    let expenseValues = Object.assign({}, this.data)
    let expenseControls = this.expenseForm.controls

    delete expenseValues['_id']

    if(expenseValues.Type==='Income'){
      this.selectTab.setValue(0)
      this.disableExpenseTab = true
    }
    else{
      this.selectTab.setValue(1)
      this.disableIncomeTab = true
    }

    for(let key in expenseValues){
      if(key != 'Type'){
        expenseControls[key].setValue(expenseValues[key])
      }
    }
  }

 
}