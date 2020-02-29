import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  })

  loginExistingUser(loginForm){
    this.loginService.loginExistingUser(loginForm)
    .subscribe((res)=>{
      console.log(res)
    })
  }

}
