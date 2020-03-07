import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  constructor(private http: Http) { }

  post(expenseValues,userId){
    return this.http.post(`${this.baseUrl}api/expense`,{
      expenseValues : expenseValues,
      userId: userId
    })
  }
}
