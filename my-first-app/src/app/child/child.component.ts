import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DatetimeserviceService } from '../datetimeservice.service';
export interface IItem {
  firstname: string;
  lastname: string;
  contact: number;
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  servicecounter = 0;
  constructor(public dt:DatetimeserviceService) {
     }
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

  @Input() todaydate:any;



// 28/02 Task 4 print parents data in tabular form using services



}
