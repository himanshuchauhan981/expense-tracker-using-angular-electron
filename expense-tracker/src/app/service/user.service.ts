import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import {SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = environment.baseUrl;

  constructor(
    private http: Http,
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router : Router
  ) { }

  loginExistingUser(userCredentials){
    return this.http.post(`${this.baseUrl}/api/login`,userCredentials)
  }

  signupNewUsers(userCredentials){
    return this.http.post(`${this.baseUrl}/api/signup`,userCredentials)
  }

  storeUserID  = (token) =>{
		this.storage.set('userId',token)
  }
  
  getUserID = () =>{
    return this.storage.get('userId')
  }

  logout(){
    this.storage.remove('userId')
    this.router.navigate(['login'])
  }
}

