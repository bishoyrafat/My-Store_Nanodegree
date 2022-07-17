import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  products: any = [];
  amount = 0;
  constructor(private sharedService:SharedService) {}

  ngOnInit(): void {
    // this.products = JSON.parse(localStorage.getItem('cart')!);
    console.log(this.products);
    this.getAllPrice();
    this.sharedService.currentData.subscribe((e:any)=>{
      console.log(e.product)
      this.amount=e.amount;
      this.products=e.product
    })
  }

  getAllPrice() {
    this.products.forEach((el:any,i:any) => {
      console.log(el.product.price);
      console.log(el.amount);
      this.amount += el.product.price * el.amount;
    });
    console.log(this.amount);
  }
}
