import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  private jwtService : JwtHelperService = new JwtHelperService(); 

  constructor(private router : Router) { 

  }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    console.log("Token Expiration Date : "+this.jwtService.getTokenExpirationDate(localStorage.getItem("currentUser")));
    console.log("Is Token Expired : "+this.jwtService.isTokenExpired(localStorage.getItem("currentUser")));
    console.log("Decode Token : ",this.jwtService.decodeToken(localStorage.getItem("currentUser")));
    console.log("Token Getter : "+this.jwtService.tokenGetter());
    
    if(localStorage.getItem("currentUser") && !this.jwtService.isTokenExpired(localStorage.getItem("currentUser"))){
      //User logged in so return true
      console.log("Auth Guard Service allow the access");
      return true;
    }
    else{
      console.log("Auth Guard Service disallow the access");
      this.router.navigate(["/login"]);
      return false;
    }
  }

  
}
