import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl : string = environment.baseUrl

  constructor(private http: HttpClient) { }

  loginExistingUser(userCredentials){
    return this.http.post('/api/login',userCredentials)
  }
}
