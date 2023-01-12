import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //inputs:['product']
})
export class ProductComponent {
  product = {
    name: 'COMPUTER',
    price: 100
  };
}
