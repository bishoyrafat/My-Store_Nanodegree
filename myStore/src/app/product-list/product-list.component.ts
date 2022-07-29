import { SharedService } from './../shared/shared.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from './../shared/models/product.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  data: any[] = [];
  cart: any[] = [];
  amountNo: any;
  products:Iproduct[] = [];
    form:FormGroup=new FormGroup({
    selection:new FormControl(1)
  })

  constructor(
    private productsService: ProductsService,
    private sharedService: SharedService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addToCArt(item: any) {
    let isExists = this.cart.find((el:any)=> {
      return el.product.id == item.id;
    });
    if(isExists != undefined) {
      isExists.amount = this.form.value.selection;
      this.cart = this.cart.filter(({ el }) => el.product.id !== item.id);
      this.cart.push({product:isExists, amount:this.form.value.selection})
      alert('Product added successfully')
    } else {
      this.cart.push({product:item, amount:this.form.value.selection})
      alert('Product added successfully')
    }
    this.sharedService.saveProduct(this.cart)
  }

  productDetails(productId: any) {
    this.route.navigate(['/productdetail', productId.id]);
  }

  getAllProducts() {
     this.productsService.getAllProducts().subscribe((data:any)=>{
      this.data = data
    })
    console.log(this.productsService.getAllProducts());
  }
}
