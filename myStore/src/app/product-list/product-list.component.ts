import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
data :any[]=[]
  constructor(private productsService:ProductsService,
    private route :Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  addToCArt(productId:number){
console.log(productId)
  }

  productDetails(productId:number){
    console.log(productId);
    this.route.navigate(['/productdetail',productId])
  }

getAllProducts(){
 this.data =  this.productsService.getAllProducts()
  console.log(this.productsService.getAllProducts())
}

}
