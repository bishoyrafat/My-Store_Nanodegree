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
    this.getAllProducts()
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
