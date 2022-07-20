import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit  {
  @Input() data:any[]=[]
  @Input() imgSrc=''
  @Input() title=''
  @Input() price=''
  @Input() description=''
  @Output() cartBtn=new EventEmitter()
  @Output() details=new EventEmitter()
  @Output() noOfProducts = new EventEmitter()
  cart:any[]=[]
  selectedProduct:any
  options:any[]=[1,2,3,4,5,6,7,8,9]
  selection=1
  form:FormGroup=new FormGroup({
    selection:new FormControl()
  })

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  addToCart(item:any){
    // this.cartBtn.emit({product:item,amount:this.form.value.selection})
    this.cart.push({product:item,amount:this.form.value.selection})
    // localStorage.setItem('cart',JSON.stringify(this.cart))
    this.sharedService.saveProduct(this.cart)
     this.sharedService.currentData.subscribe((e:any)=>{
      console.log(this.cart);
    })
  }

  productDetails(e:any){
    this.details.emit(e)
  }

}
