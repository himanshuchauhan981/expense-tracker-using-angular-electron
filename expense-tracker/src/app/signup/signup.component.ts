import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  signupForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    confPassword: new FormControl('',Validators.required)
  })

  ngOnInit() {
  }

  signupNewUser(signupForm){
    this.userService.signupNewUsers(signupForm.value)
    .subscribe((res) =>{
      this.router.navigate(['login'])
    })
  }

}
