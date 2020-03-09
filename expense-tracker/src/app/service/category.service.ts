import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl : string = environment.baseUrl

  constructor(private http: Http){ }

  categories : Category[] = [ ]

  get(){
    this.http.get(`${this.baseUrl}/api/category`)
    .subscribe((res)=>{
      this.categories = res.json().categories
    })
  }


  filterList(value : string,heading : string): Category[] {
    let filterValue = value.toLowerCase()
    return this.categories.filter(data => data.category.toLowerCase().indexOf(filterValue) === 0 && data.type == heading)
  }

  addNew(newCategory:string,heading: string){
    if(!this.categories.some(data => data.category === newCategory)){
      this.http.post(`${this.baseUrl}/api/category`,{
        category: newCategory,
        type: heading
      })
      .subscribe(res =>{
        let data =res.json().data
        this.categories.push({
          category : data.category,
          id : data._id,
          type: data.type
        })
      })
    }
  }

}

export interface Category{
  type: string,
  id: string,
  category: string
}