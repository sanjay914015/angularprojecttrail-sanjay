import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgurl1 = ".././assets/images/wheat.jpg"
  imgurl2 = ".././assets/images/rice.jpg"
  imgurl3 = ".././assets/images/bajara.jpg"
  // clickeddesc1 = false
  // clickeddesc2 = false
  // clickeddesc3 = false

  // description1()
  // {
  //   this.clickeddesc1 = true;
  // }
  // description2()
  // {
  //   this.clickeddesc1 = true;
  // }
  // description3()
  // {
  //   this.clickeddesc1 = true;
  // }

  data1=[
    {
      "id": 2,
      "name": "wheet",
      "price": 400,
      "quantity": "2000KG",
      "location": "Ahmedabad",
      "presentstock": "100KG"
    },
    {
      "id": 2,
      "name": "rice",
      "price": 200,
      "quantity": "2000KG",
      "location": "Rajkot",
      "presentstock": "100KG"
    },
    {
      "id": 3,
      "name": "Pearl Millet ",
      "price": 200,
      "quantity": "2000KG",
      "location": "Surat",
      "presentstock": "100KG"
    }
  ]
  counter2=0;
  @Output() newitemEvents=   new EventEmitter<any>();



  addtocart1()
  {
    this.newitemEvents.emit(this.data1[0]);  
  }
  addtocart2()
  {
    this.newitemEvents.emit(this.data1[1]);  
  }
  addtocart3()
  {
    this.newitemEvents.emit(this.data1[2]);  
  }


}
