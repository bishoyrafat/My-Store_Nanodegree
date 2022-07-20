import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartQuantity=0
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe((e:any)=>{
     console.log('header',e.length);
     this.cartQuantity=e.length
   })
  }


}
