import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { PopupExpenseBoxComponent } from '../popup-expense-box/popup-expense-box.component';

@Component({
  selector: 'expense-tracker-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }
  
  date = new FormControl(new Date());

  openDialogBox(){
    this.dialog.open(PopupExpenseBoxComponent,{
      width: '800px'
    })
  }
}
