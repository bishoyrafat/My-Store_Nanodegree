import { SharedService } from './../shared/shared.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  data: any[] = [];
  cart: any[] = [];
  amountNo: any;
  products = [];

  constructor(
    private productsService: ProductsService,
    private sharedService: SharedService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  addToCArt(e: any) {
    console.log(e);
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
