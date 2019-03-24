import { Injectable, Inject } from '@angular/core';
import { APIBASEURLCONFIG } from './api-base-url-config';
import { User } from './model/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user : User;
  private headers : Object;

  constructor(@Inject(APIBASEURLCONFIG) baseURLConf : APIBASEURLCONFIG, private http : HttpClient) { 
    this.user = new User;
    this.user.setUsername("admin");
    this.user.setPassword("admin");
    this.headers =  {headers : new HttpHeaders({"Content-Type" : "application/json", "Accept" : "application/json"}) };
  }

  public getJWTToken(username : string, password : string) {//: Observable<User>
    // let user : User = new User();
    // user.setUsername("admin");
    // user.setPassword("admin");
    //this.headers.headers.set("Access-Control-Allow", "http://localhost:8080")
    this.headers.responseType = "text";
    console.log("username passed : "+username+" password passed : "+password);
    return this.http.post<string>(APIBASEURLCONFIG.API_URL()+"signin?username="+username+"&password="+password, null, this.headers)
    .pipe( 
      map((response : string) =>{
        console.log("RECOVERED TOKEN ::::> ", response);
        console.log("LocalStorage : ", localStorage);
        localStorage.setItem("currentUser", response);
        return response;
      }),
      catchError(err => {
        console.log("ERROR THROWN BY THE SERVER : ", err);
        console.log("TYPE OF ERROR THROWN BY THE SERVER : ", typeof err.error);
        console.log("JSON.parse TYPE ERROR THROWN BY THE SERVER : ", typeof JSON.parse (err.error));
        console.log("JSON.parse ERROR THROWN BY THE SERVER : ", JSON.parse(err.error));
        return throwError(JSON.parse(err.error));
      })
    );
  }
  
  public revokeToken(){
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
