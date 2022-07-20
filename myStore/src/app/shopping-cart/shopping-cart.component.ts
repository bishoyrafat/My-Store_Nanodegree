import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
  form = new FormGroup({
    quantity:new FormControl()
  })
  constructor(private sharedService:SharedService) {}

  ngOnInit(): void {
    // this.products = JSON.parse(localStorage.getItem('cart')!);
    this.sharedService.currentData.subscribe((e:any)=>{
      console.log(e)
      this.products=e
    })
    this.getAllPrice();
  }



  getAllPrice() {
    this.amount=0
    this.products.forEach((el:any, i:any) => {
      console.log(el.product.price,el.amount,this.form.value.quantity)
      this.amount += el.product.price * el.amount
    })
}


}
