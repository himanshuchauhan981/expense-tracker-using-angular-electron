import { Injectable,Inject } from '@angular/core'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  constructor(private http: Http, @Inject(SESSION_STORAGE) private storage: WebStorageService){
    this.get()
  }

  post(expenseValues){
    return this.http.post(`${this.baseUrl}/api/expense`,expenseValues)
  }

  get(){
    let userId = this.storage.get('userId')
    
    this.http.get(`${this.baseUrl}/api/expense`,{
      params : {
        userId : userId
      }
    })
    .subscribe(res =>{
      // console.log(res.json())
    })
    
  }
}
