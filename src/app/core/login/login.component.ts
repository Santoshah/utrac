import { UserConstant } from './../../user.constant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  error = "";
  isError = false;
  loading = false;
  submitted = false;
  isLoginErrorMessage:any = "";

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService
  ) {
      

  }
 
  ngOnInit(): void {

    this.loginFormGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required ],
  });


  }

  get f() { return this.loginFormGroup.controls }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginFormGroup.invalid) {
        return;
    }
    this.isError = false;
    this.loading = true;

    let loginData = {
        username: this.f.username.value,
        password: this.f.password.value
    }

    this.authService.login( loginData ).subscribe(
        (data) => { 
            console.log(data);
            this.loginSuccess(data);                               
        }
    );
}
  loginSuccess ( data ) {
    console.log("Login success...");
    localStorage.setItem( 'access_token', data.session_token );
    this.router.navigate(['/dashboard/orders']);
}
}
