import { Injectable,Inject } from '@angular/core'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BehaviorSubject } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  tempdata : any

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])

  deleteChange: BehaviorSubject<string> = new BehaviorSubject<string>('')

  userExpense : ExpenseData[]

  constructor(
    private http: Http,
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){ }

  post(expenseValues){
    this.http.post(`${this.baseUrl}/api/expense`,expenseValues)
    .subscribe((res) =>{
      this.userExpense.push(res.json().data)
      this.tempdata = res.json().data
      this.snackBar.open(res.json().msg,'Close',{
        duration : 5000
      })
    })
  }

  put(expenseValues,id:string){
    this.http.put(`${this.baseUrl}/api/expense/${id}`,expenseValues)
    .subscribe((res) =>{
      let data  = res.json().data
      this.userExpense = this.userExpense.filter((value,key) =>{
        if(value._id === data._id){
          value.Category = data.Category
          value.Date = data.Date
          value.Amount = data.Amount
        }
        return true
      })
      this.tempdata = res.json().data
      this.snackBar.open(res.json().msg,'Close',{
        duration : 5000
      })
    })
  }

  get(date){
    let userId = this.storage.get('userId');
    this.http.get(`${this.baseUrl}/api/expense`, {
      params : {
        userId : userId,
        momentDate : {
          month: date.format('M'),
          year: date.format('YYYY')
        }
      }
    }).subscribe(res =>{
      this.userExpense = res.json().data
    })
  }

  delete(id:string){
    this.http.delete(`${this.baseUrl}/api/expense/${id}`)
    .subscribe(res =>{
      this.userExpense = this.userExpense.filter(data => data._id != id)
      let status = res.json().status
      if(status === 200){
        this.deleteChange.next(id)
        this.snackBar.open(res.json().msg,'Close',{
          duration : 5000
        })
      }
    })
  }

  getExpense(id:string){
    return this.http.get(`${this.baseUrl}/api/expense/${id}`)
  }

  getTempData(){
    return this.tempdata
  }
}

export interface ExpenseData {
  _id: String,
  Date : Date,
  Category: string,
  Type: string,
  Amount: number
}