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
  @Input() customClass=''
  @Output() cartBtn=new EventEmitter()
  @Output() details=new EventEmitter()
  @Output() noOfProducts = new EventEmitter()
  cart:any[]=[]
  selectedProduct:any
  options:any[]=[1,2,3,4,5,6,7,8,9]
  selection=1
  form:FormGroup=new FormGroup({
    selection:new FormControl(1)
  })

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  addToCart(item:any){

      let isExists = this.cart.find((el:any)=> {
        return el.product.id == item.id;
      });

      if(isExists != undefined) {
        isExists.amount = this.form.value.selection;
        this.cart = this.cart.filter(({ el }) => el.product.id !== item.id);
        this.cart.push({product:isExists, amount:this.form.value.selection})
      } else {
        this.cart.push({product:item, amount:this.form.value.selection})
      }

    this.sharedService.saveProduct(this.cart)
     this.sharedService.currentData.subscribe((e:any)=>{
      console.log(this.cart);
    })
  }

  productDetails(e:any){
    this.details.emit(e)
  }

}
