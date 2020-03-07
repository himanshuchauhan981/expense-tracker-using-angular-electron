import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl : string = environment.baseUrl

  constructor(
    private http: Http
  ) {
    this.http.get(`${this.baseUrl}/api/category`).subscribe((res:any) =>{
      this.categories = res.json().categories
    })
  }

  categories : Category[] = []

  list(value: string): Category[]{
    let filterValue = value.toLowerCase()
    return this.categories.filter(category => category.type.toLowerCase().indexOf(filterValue) === 0)
  }
}

export interface Category{
  type: string,
  id: string
}