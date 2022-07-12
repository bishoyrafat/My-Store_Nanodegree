import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() imgSrc=''
@Input() title=''
@Input() price=''
@Input() description=''
@Output() cartBtn=new EventEmitter()
@Output() ditails=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(e:any){
    this.cartBtn.emit(e)
  }
  productDetails(e:any){
    this.ditails.emit(e)
  }
}
