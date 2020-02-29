import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  expense : number  = 0

  ngOnInit() {
  }

}
