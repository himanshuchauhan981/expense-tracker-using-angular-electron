import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl : string = environment.baseUrl

  constructor(private http: Http) { }

  loginExistingUser(userCredentials){
    return this.http.post(`${this.baseUrl}/api/login`,userCredentials)
  }
}
