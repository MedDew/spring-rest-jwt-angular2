import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CarsComponent } from './cars.component';
import { CarsDetailComponent } from '../cars-detail/cars-detail.component';


@NgModule({
  imports: [
    CommonModule,
    // AppRoutingModule
  ],
  declarations: [CarsComponent],
  //exports: [CarsComponent],
})
export class CarsModule { }
