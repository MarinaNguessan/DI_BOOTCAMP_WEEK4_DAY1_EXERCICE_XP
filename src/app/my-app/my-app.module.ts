import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from '../greeting/greeting.component';
import { ProductComponent } from '../product/product.component';



@NgModule({
  declarations: [
    GreetingComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  GreetingComponent,
  ProductComponent
  ]
})
export class MyAppModule { }
