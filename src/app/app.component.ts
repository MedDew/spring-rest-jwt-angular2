import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring-rest-jwt-angular2';
  name: String = "Med";
  show : boolean = false;
  names : String[] = ["Lenny", "Boy", "Marc"];

  clicked(): void{
    console.log("SHOW");
    console.log(this.name);
    console.log(this.show);
    let value : boolean = !this.show;
    console.log(value);
    this.show = !this.show
  }
}
