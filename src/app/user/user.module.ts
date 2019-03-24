import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
 
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent, UserDetailComponent, LoginComponent],
  exports: [UserComponent]
})
export class UserModule { }
