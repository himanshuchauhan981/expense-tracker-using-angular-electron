import { Component, OnInit, Input } from '@angular/core'
import { ChartType,ChartOptions } from 'chart.js'
import { Label, SingleDataSet } from 'ng2-charts'

import { ExpenseData, ExpenseIncomeService } from 'src/app/service/expense-income.service'

@Component({
  selector: 'expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.css']
})
export class ExpenseChartComponent implements OnInit {

  ngOnInit() { }

  constructor(private expenseIncomeService: ExpenseIncomeService){ }

  @Input() expenseChartData : ExpenseData[]

  public pieChartOptions : ChartOptions = {
    responsive : true
  }

  public pieChartLabels: Label[]

  public pieChartData: SingleDataSet = [100,1000,2000]

  public pieChartType: ChartType = 'pie'

  public pieChartLegend = true

  public pieChartPlugins = []

  ngOnChanges(){
    this.filterExpense()

    this.expenseIncomeService.dataChange.subscribe((res:any) =>{
      this.filterExpense()
    })
  }

  filterExpense(){
    if(this.expenseChartData != undefined){
      this.expenseChartData = this.expenseChartData.filter(data => data.Type != 'Income')
      this.pieChartLabels = this.expenseChartData.map(data => data.Category)
      
      this.pieChartData = this.expenseChartData.map(data => data.Amount)
    }
  }

}
