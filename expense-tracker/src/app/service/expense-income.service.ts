import { Injectable,Inject } from '@angular/core'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  public _userExpense : ExpenseData[]

  constructor(private http: Http, @Inject(SESSION_STORAGE) private storage: WebStorageService){
  }

  post(expenseValues){
    return this.http.post(`${this.baseUrl}/api/expense`,expenseValues)
  }

  get(){
    let userId = this.storage.get('userId');
    
    return this.http.get(`${this.baseUrl}/api/expense`, {
      params : {
        userId : userId
      }
    })
  } 
}

export interface ExpenseData {
  _id: String,
  Date : Date,
  Category: string,
  Type: string
}