import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  })

  loginExistingUser(loginForm){
    this.userService.loginExistingUser(loginForm.value)
    .subscribe((res)=>{
      if(res.json().status  === 200){
        this.userService.storeUserID(res.json().usersId)
        this.router.navigate(['home'])
      }
    })
  }

}
