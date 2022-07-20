import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
price:number=0
  ngOnInit(): void {
   this.price =  +this.activatedRoute.snapshot.queryParams['price'];
  console.log(this.price)
  }

}
