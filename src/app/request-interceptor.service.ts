import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import  { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor{
  constructor(@Inject(AuthenticationService) private authService :AuthenticationService) {
    
  }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    console.log("Intecepted req : "+req.urlWithParams);
    let token = localStorage.getItem("currentUser");
    if(token != null){
      console.log("Passing token foreach request : "+token);
      req = req.clone(
          {setHeaders : {Authorization : `Bearer ${token}`}}
      );
    }
    console.log("intercepted request modified : ", req);
    return next.handle(req). pipe(tap((event : HttpEvent<any>) =>{
      if(event instanceof HttpResponse){
        return null;
      }
    },
    (err : any) => {
      console.log("ERROR ++++> ", err);
    }));
  }

}
