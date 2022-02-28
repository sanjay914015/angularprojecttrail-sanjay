import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeserviceService {

  constructor() { }

  public mylist = [];
  counter = 0;
  todaydate:any
  today()
  {
    this.todaydate = new Date();
    return this.todaydate;
  }
  counterofservice()
  {
    return this.counter++;
  }
  fname ="";
  lname="";
  setdata(firstname:string,lastname:string)
  {
    this.fname = firstname;
    this.lname= lastname;
  }
  getdata()
  {
    return this.fname+this.lname;
  }
  


  // date 28/02 Task 4. Pass one component form data to another component and print it in tabular form
  userdata:any =[{"email":'sanjaychauhan@gmail.com',"password":'11234567',"address":'surendranagar'}];
  passmaintoservice(userdata:any)
  {
    this.userdata.push(userdata)
  }
  // child component is child name file.
}
