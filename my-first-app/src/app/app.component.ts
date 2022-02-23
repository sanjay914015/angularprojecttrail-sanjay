import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgurl = ".././assets/images/pic1.jpg";
  name = "sanjay";
  countclick=0;
  value = "This is My application which i created";
  count()
  {
    this.countclick++;
  }
}
