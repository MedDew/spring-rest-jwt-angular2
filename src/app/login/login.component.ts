import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm : FormGroup;
  private isSubmitted : Boolean = false;
  private error : Object;
  
  constructor(private formBuilder : FormBuilder, private authService : AuthenticationService, private router : Router) { 
    this.loginForm = this.formBuilder.group({
      login : ["", Validators.required],
      pw : ["", Validators.required]
    });
  }

  ngOnInit() {
    //Destroy the token
    this.authService.revokeToken();
  }

  public onLoginSubmit(){
    this.isSubmitted = true;
    console.log("loginForm value : ",this.loginForm.value);
    console.log("loginForm login : ",this.loginForm.get("login").value);
    console.log("loginForm pw : ",this.loginForm.get("pw").value);
    console.log("authService : ",this.authService);

    this.authService.getJWTToken(this.loginForm.get("login").value, this.loginForm.get("pw").value).subscribe(
      response => {
        console.log("Token from spring-boot-jwt : "+response);
        this.router.navigate(["user/"+this.loginForm.value.login]);
      },
      error => {
        console.log("ERROR ", typeof error);
        this.error = error;
        console.log("ERROR MSG ", error.message);
      }
    );
  }
}
