import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Iproduct } from '../shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product:any
  options=[1,2,3,4,5,6,7,8,9]
  data:any[]=[]
  cart: any[] = [];
  products:Iproduct[] = [];
    form:FormGroup=new FormGroup({
    selection:new FormControl(1)
  })

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private sharedService:SharedService
  ) {}

  ngOnInit(): void {
    this.getAllProducts()
    this.sharedService.currentData.subscribe((e:any)=>{
      if(Object.keys(e).length > 0){
        this.cart = e
      }
    })
  }
  addToCArt(item:any){
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
   this.sharedService.currentData.subscribe((e:any)=>{
    this.cart = e;
    console.log("E: " + Object.keys(e[0]));
  })
  }

  productDetails(productId:any){
  }


getAllProducts(){
  this.productsService.getAllProducts().subscribe((data:any)=>{
    this.data = data
    console.log(this.data)
    let id = +this.activatedRoute.snapshot.params['id'];
    console.log(id)
    console.log(this.data)
     this.product = this.data.find((el: any) => {
     return el.id === id;
    });
    this.data=[]
        this.data.push(this.product)
        console.log(data)
  })
}

}
