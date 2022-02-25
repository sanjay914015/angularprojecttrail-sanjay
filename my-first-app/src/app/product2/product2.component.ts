import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

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
  data2 = [
    {
      "id": 2,
      "name": "Wheat",
      "price": 400,
      "quantity": "2000KG",
      "location": "Ahmedabad",
      "presentstock": "100KG"
    }
  ]
  price = 400;
  @Output() newitemEvents2=   new EventEmitter<any>();
  cart()
  {
    this.newitemEvents2.emit(this.price);
  }

}
