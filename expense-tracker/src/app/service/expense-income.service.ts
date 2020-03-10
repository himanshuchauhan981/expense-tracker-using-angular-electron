import { Injectable,Inject, Output, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'

import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  @Output() submitEvent: EventEmitter<boolean> = new EventEmitter()

  public _userExpense : ExpenseData[]

  constructor(private http: Http, @Inject(SESSION_STORAGE) private storage: WebStorageService,private snackBar: MatSnackBar){
  }

  post(expenseValues){
    this.http.post(`${this.baseUrl}/api/expense`,expenseValues)
    .subscribe((res) =>{
      this.snackBar.open(res.json().msg,'Close',{
        duration : 5000
      })
    })
  }

  put(expenseValues,id:string){
    this.http.put(`${this.baseUrl}/api/expense/${id}`,expenseValues)
    .subscribe((res) =>{
      this.snackBar.open(res.json().msg,'Close',{
        duration : 5000
      })
    })
  }

  get(){
    let userId = this.storage.get('userId');
    
    return this.http.get(`${this.baseUrl}/api/expense`, {
      params : {
        userId : userId
      }
    })
  }
  
  fireSubmitEvent(){
    this.submitEvent.emit(true)
  }

  getExpense(id:string){
    return this.http.get(`${this.baseUrl}/api/expense/${id}`)
  }
}

export interface ExpenseData {
  _id: String,
  Date : Date,
  Category: string,
  Type: string
}