import { Component, OnInit, Inject } from '@angular/core'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ExpenseIncomeService } from '../../service/expense-income.service'


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef : MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id,
    private expenseIncomeService: ExpenseIncomeService
  ){ }

  ngOnInit(){}

  closePopUp(){
    this.dialogRef.close()
  }

  delete(id: String){
    this.expenseIncomeService.delete(id)
    this.closePopUp()
  }
}
