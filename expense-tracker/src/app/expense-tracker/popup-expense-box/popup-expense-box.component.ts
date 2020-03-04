import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators'
import { MatTabChangeEvent } from '@angular/material'
import { MatDialogRef } from '@angular/material/dialog'

export interface Category{
  type :string  
}
@Component({
  selector: 'popup-expense-box',
  templateUrl: './popup-expense-box.component.html',
  styleUrls: ['./popup-expense-box.component.css']
})
export class PopupExpenseBoxComponent implements OnInit {

  filteredCategory : Observable<Category[]>

  tabHeading : string = 'Income'

  expenseForm = new FormGroup({
    category : new FormControl('')
  })

  categories: Category[] = [
    {
      type : 'Movies'
    },
    {
      type: 'Paytm'
    }
  ]
  
  paymentMethod = ['Cash','Credit','Debit']

  constructor(private dialogRef : MatDialogRef<PopupExpenseBoxComponent>) { 
    this.filteredCategory = this.expenseForm.get('category').valueChanges
    .pipe(
      startWith(''),
      map(type => type ? this._filterCategory(type) : this.categories.slice())
    )
  }

  ngOnInit() {
  }

  private _filterCategory(value: string): Category[]{
    let filterValue = value.toLowerCase()
    return this.categories.filter(category => category.type.toLowerCase().indexOf(filterValue) === 0)
  }

  public selectedTab(tabChangeEvent: MatTabChangeEvent): void{
    if(tabChangeEvent['index'] === 1){
      this.tabHeading = 'Expense'
    }
    else{
      this.tabHeading = 'Income'
    }
  }

  closePopUp(){
    this.dialogRef.close()
  }
}
