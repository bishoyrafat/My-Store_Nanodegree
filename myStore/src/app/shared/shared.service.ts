import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
data = new BehaviorSubject<any>('')
currentData=this.data.asObservable()
  constructor() {
  }
  saveProduct(data:any){
    this.data.next(data)
  }
}
