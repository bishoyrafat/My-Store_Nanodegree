import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    quantity: new FormControl(),
  });

  submitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    credit: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
    ]),
  });
  constructor(private sharedService: SharedService, private route: Router) {}

  ngOnInit(): void {
    console.log(this.amount);
    this.sharedService.currentData.subscribe((e: any) => {
      console.log(e);
      this.products = e;
    });
    this.getAllPrice();
  }

  getAllPrice() {
    this.amount = 0;
    if (Boolean(this.products) === false) {
      return;
    } else {
      this.products.forEach((el: any, i: any) => {
        console.log(el.product.price, el.amount, this.form.value.quantity);
        this.amount += el.product.price * el.amount;
        if(this.amount===0){
          console.log('zeroooooooooo')
          localStorage.setItem('amount',JSON.stringify(this.amount))
        }


      });
    }
  }

  submit() {
    if (this.submitForm.invalid) return;
    else {
      this.route.navigate(['/confirmationmessage'], {
        queryParams: { price: this.amount },
      });
    }
  }
}
