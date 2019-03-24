import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APIBASEURLCONFIG } from '../api-base-url-config';
import { User } from '../model/user';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers : Object;
  private token : string;

  constructor(private http : HttpClient, @Inject(APIBASEURLCONFIG) private baseURLConf : APIBASEURLCONFIG) { 
    console.log("HttpClient : ", http);
    this.headers =  {headers : new HttpHeaders({"Content-Type" : "application/json", "Accept" : "application/json"}) };  
  }

  getUserByName(userName : string) : Observable<User>{
    //Adding parameter to this.headers 
    console.log("USERNAME : ",userName, userName.toString());
    let httpParam = new HttpParams().set("username", userName);
    console.log("is params property exists : "+this.headers.hasOwnProperty("params"));
    console.log(httpParam);
    console.log("UserByName URL : "+APIBASEURLCONFIG.API_URL()+`${userName}`);
    for(let h in this.headers){
      console.log("Header => "+h);
    }

    // let test = this.getJWTToken();
    console.log("UserByName : "+APIBASEURLCONFIG.API_URL()+`${userName}`);
    console.log("TOKEN : "+this.token);
    console.log("TOKEN : "+localStorage.getItem("currentUser"));
    // console.log("TOKEN : ",test);
    // this.headers.headers.append("Authorization" , "Bearer "+this.token);
    return this.http.get<User>(APIBASEURLCONFIG.API_URL()+`${userName}`,this.headers);
  }

 
}
