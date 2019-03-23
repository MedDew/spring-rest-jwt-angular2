import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APIBASEURLCONFIG } from './api-base-url-config';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { PricePipe } from './price.pipe';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { RequestInterceptorService } from './request-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PricePipe,
    // CarsComponent, 
    // UserComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // CarsModule,
    UserModule,
    HttpClientModule
  ],
  providers: [APIBASEURLCONFIG, {provide : HTTP_INTERCEPTORS, useClass : RequestInterceptorService, multi : true}],
  bootstrap: [AppComponent],
  // entryComponents: [CarsComponent,UserComponent]// 
})
export class AppModule {

  /*constructor(@Inject(DOCUMENT) private document : Document ){
    console.log("Doc : "+this.document.location.pathname);
  }

  ngDoBootstrap(app){
    // const carsComponentElement = document.querySelector("#carsComponentElement");
    // carsComponentElement.textContent = "CarsLoaded";

    // const componentElement = document.createElement("app-cars");
    // document.body.appendChild(componentElement);

    // app.bootstrap(CarsComponent);

    console.log("Doc sliced : "+this.document.location.pathname.slice(1));
    fetch(this.document.location.pathname.slice(1)).then((name) => {bootStrapRootComponent(app, name)});
  }*/

 
}
  // app - reference to the running application (ApplicationRef)
  // name - name (selector) of the component to bootstrap
  function bootStrapRootComponent(app, name){
    const appToLoad = {
      "app-cars" :  CarsComponent,
      "app-user" :  UserComponent
    };

    // obtain reference to the DOM element that shows userComponentElement
    // and change the status to `User Loaded`
    if(name == "app-cars"){
      const userComponentElement = document.querySelector("#carsComponentElement");
      userComponentElement.textContent = "Cars Loaded";
    }else if(name == "app-user"){
      const userComponentElement = document.querySelector("#userComponentElement");
      userComponentElement.textContent = "User Loaded";
    }

    // create DOM element for the component being bootstrapped
    // and add it to the DOM
    const element = document.createElement(name);
    document.body.appendChild(element);

    console.log("app", app);
    console.log("element component loaded => "+ name);
    // bootstrap the application with the selected component
    const component = appToLoad[name]
    app.bootstrap(component);
  }

  function fetch(url){
    console.log("URL => "+url);
    console.log("URL => ",url.match(/user\/\d+/));
    return  new Promise(function(resolve, reject){
      setTimeout(() => {
        if(url == "user"){
          resolve("app-user");
        }
        else if(url == "cars"){
          resolve("app-cars");
        }
      },
      10000);
    });
  }