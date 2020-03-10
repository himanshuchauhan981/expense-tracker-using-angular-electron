import { Injectable,Inject } from '@angular/core'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'


import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  baseUrl : string = environment.baseUrl

  tempdata : any

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])

  deleteChange: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private http: Http,
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private snackBar: MatSnackBar
  ){ }

  post(expenseValues){
    this.http.post(`${this.baseUrl}/api/expense`,expenseValues)
    .subscribe((res) =>{
      this.tempdata = res.json().data
      this.snackBar.open(res.json().msg,'Close',{
        duration : 5000
      })
    })
  }

  put(expenseValues,id:string){
    this.http.put(`${this.baseUrl}/api/expense/${id}`,expenseValues)
    .subscribe((res) =>{
      this.tempdata = res.json().data
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

  delete(id){
    this.http.delete(`${this.baseUrl}/api/expense/${id}`)
    .subscribe(res =>{
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