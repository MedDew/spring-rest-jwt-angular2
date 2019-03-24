import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  private user : User;

  constructor(private _userService : UserService, private activatedRoute : ActivatedRoute) {
      console.log("USER SERVICE : ", _userService);
  }

  ngOnInit() {
    console.log("User Name param : "+this.activatedRoute.params["userName"]);
    for(let p in this.activatedRoute.params){
      console.log("p ===> "+p);
    }
    this.activatedRoute.params.subscribe((param : Params) => {
      console.log("param => ", param.userName);
      console.log("param 2  => ", param["userName"]);
      
      this.getUserDetail(param.userName);
     });
  }

  getUserDetail(userName : string){
    return this._userService.getUserByName(userName).subscribe(
      data => {
        console.log("data from server : ", data);
        this.user = data;
      });
  }
}
