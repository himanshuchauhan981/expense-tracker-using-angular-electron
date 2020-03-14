import { Component, OnInit, Input } from '@angular/core';
import { ExpenseData } from 'src/app/service/expense-income.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import { ExpenseIncomeService } from '../../service/expense-income.service'

@Component({
  selector: 'income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.css']
})
export class IncomeChartComponent implements OnInit {

  @Input() incomeChartData : ExpenseData[]

  public pieChartOptions : ChartOptions = {
    responsive : true
  }

  public pieChartLabels: Label[]

  public pieChartData: SingleDataSet = [100,1000,2000]

  public pieChartType: ChartType = 'pie'

  public pieChartLegend = true

  public pieChartPlugins = []

  constructor(private expenseIncomeService: ExpenseIncomeService) { }

  ngOnInit() { }

  ngOnChanges(){
    this.filterIncome()
    this.expenseIncomeService.dataChange.subscribe((res:any) =>{

      this.filterIncome()  
    })

    this.expenseIncomeService.deleteChange.subscribe((id:any) =>{
      // this.incomeChartData  = this.incomeChartData.filter(data => data._id != id)
      this.filterIncome()
    })
  }

  filterIncome(){
    if(this.incomeChartData != undefined){
      this.incomeChartData = this.incomeChartData.filter(data => data.Type != 'Expense')
      this.pieChartLabels = this.incomeChartData.map(data => data.Category)
      
      this.pieChartData = this.incomeChartData.map(data => data.Amount)
    }
  }

}
