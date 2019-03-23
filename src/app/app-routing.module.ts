import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AppComponent } from './app.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthguardService } from './_authguard/authguard.service';

const routes : Routes = [
    // {
    //     path : "cars",
    //     component: CarsComponent
    // },
    // {
    //     path : "cars/detail",
    //     component: CarsDetailComponent
    // },
    {
        path:  "",
        //component : AppComponent,
        redirectTo: "/login", 
        pathMatch: 'full'
    },
    {
        path: "user",
        component: UserComponent,
        canActivate : [AuthguardService]
    },
    {
        path: "user/:userName",
        component: UserDetailComponent,
        canActivate : [AuthguardService]
    },
    {
        path: "login",
        component: LoginComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}