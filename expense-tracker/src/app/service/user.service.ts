import { Injectable,Inject } from '@angular/core';
import { environment } from '../../environments/environment'
import { Http } from '@angular/http'
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = environment.baseUrl

  constructor(private http: Http, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  loginExistingUser(userCredentials){
    return this.http.post(`${this.baseUrl}/api/login`,userCredentials)
  }

  signupNewUsers(userCredentials){
    return this.http.post(`${this.baseUrl}/api/signup`,userCredentials)
  }

  storeUserID  = (token) =>{
		this.storage.set('userId',token)
	}
}

