import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemrecieved = "";
  itemforchild = "Lenovo";
  @Input() itemrecieved2:any;
  imgurl1 = ".././assets/images/1.jpg";
  imgurl2 = ".././assets/images/2.jpg";
  imgurl3 = ".././assets/images/3.jpg";
  counter = 0;
  @Output() newitemEvents=   new EventEmitter<number>();

  addNewItem()
  {
    this.counter++
    this.newitemEvents.emit(this.counter);
  }


}
