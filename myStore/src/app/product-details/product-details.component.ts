import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product:any
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
     this.product = this.productsService.getAllProducts().find((el: any) => {
     return el.id === id;
    });
    console.log(this.product);
  }
}
