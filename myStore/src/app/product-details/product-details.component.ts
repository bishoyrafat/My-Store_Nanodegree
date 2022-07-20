import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product:any
  options=[1,2,3,4,5,6,7,8,9]
  data:any[]=[]
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private sharedService:SharedService
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    this.getAllProducts()
     this.product = this.productsService.getAllProducts().find((el: any) => {
     return el.id === id;
    });
    console.log(this.product);
    this.data.push(this.product)
    console.log(this.data)
    this.sharedService.currentData.subscribe((e:any)=>{
      console.log(e)
    })
  }
  addToCArt(e:any){
    console.log(e);
  }

  productDetails(productId:any){
  }


getAllProducts(){
  console.log(this.productsService.getAllProducts())
}

}
