import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // counter = 0;
  // @Output() newitemEvents=   new EventEmitter<number>();

  // addNewItem()
  // {
  //   this.counter++
  //   this.newitemEvents.emit(this.counter);
  // }
  a=[1]
  data1=[
    {
      "id": 1,
      "name": "Rice",
      "price": 100,
      "quantity": "2000KG",
      "location": "Ahmedabad",
      "presentstock": "100KG"
    }
  ]
  price = 100;
  @Output() newitemEvents1=   new EventEmitter<any>();
  cart()
  {
    this.newitemEvents1.emit(this.price);
  }
}
