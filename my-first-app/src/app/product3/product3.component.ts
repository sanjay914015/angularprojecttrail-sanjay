import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter = 0;
  @Output() newitemEvents=   new EventEmitter<number>();

  // addNewItem()
  // {
  //   this.counter++
  //   this.newitemEvents.emit(this.counter);
  // }
  data3 = [
    {
      "id": 3,
      "name": "Pearl Millet",
      "price": 200,
      "quantity": "2000KG",
      "location": "Ahmedabad",
      "presentstock": "100KG"
    }
  ]
  price = 200;
  @Output() newitemEvents3=   new EventEmitter<any>();
  cart()
  {
    this.newitemEvents3.emit(this.price);
  }
  

}
