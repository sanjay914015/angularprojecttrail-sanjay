import { Component } from '@angular/core';
import { DatetimeserviceService } from './datetimeservice.service'
import { GetjasondataService } from './getjasondata.service'
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpDataRequestService } from './http-data-request.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  
  // imgurl = ".././assets/images/pic1.jpg";
  // name = "sanjay";
  // countclick=0;

  // value = "This is My application which i created";
  // count()
  // {
  //   this.countclick++;
  // }
  // fname = "";
  // lname ="";
  // contact = "";
  // FillTable()
  // {
  //   this.fname = "";
  //   this.lname = "";
  //   this.contact = "";
  // }
  // able = false;

  // getnumber:any;
  // checkeven()
  // {
  //   if(this.getnumber%2==0)
  //   {
  //     return true;
  //   }
  //   else
  //   {
  //     return false;
  //   }
  // }


  // numarrays = [10,20,10,20];
  // strarrays = ["sanjay", "chauhan", "san"];
  // numberarrays = [1,2,3,4,5,6,7,8]

  // cnt = 0;
  // checklocation()
  // {
  //   this.cnt++;
  //   if(this.cnt%2==0)
  //   {
  //     return true;
  //   }
  //   else
  //   {
  //     return false;
  //   }
  // }


  // itemarray = ["sanjay","chauhan"];
  // itemsent = "sanjay";
  // addcounter = 0;

  // increamentcounter()
  // {
  //   this.addcounter++;
  // }

  // counter2=0;

  // increamentcounter2()
  // {
  //   this.counter2++;
  // // }

  // item =100;
  // newArray = [10,21,30,41,50,61];
  // result= 1;
  // unable()
  // {
  //   return 1;
  // }
  // disable()
  // {  }


  // data = [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //       "street": "Kulas Light",
  //       "suite": "Apt. 556",
  //       "city": "Gwenborough",
  //       "zipcode": "92998-3874",
  //       "geo": {
  //         "lat": "-37.3159",
  //         "lng": "81.1496"
  //       }
  //     },
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {
  //       "name": "Romaguera-Crona",
  //       "catchPhrase": "Multi-layered client-server neural-net",
  //       "bs": "harness real-time e-markets"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "Ervin Howell",
  //     "username": "Antonette",
  //     "email": "Shanna@melissa.tv",
  //     "address": {
  //       "street": "Victor Plains",
  //       "suite": "Suite 879",
  //       "city": "Wisokyburgh",
  //       "zipcode": "90566-7771",
  //       "geo": {
  //         "lat": "-43.9509",
  //         "lng": "-34.4618"
  //       }
  //     },
  //     "phone": "010-692-6593 x09125",
  //     "website": "anastasia.net",
  //     "company": {
  //       "name": "Deckow-Crist",
  //       "catchPhrase": "Proactive didactic contingency",
  //       "bs": "synergize scalable supply-chains"
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "name": "Clementine Bauch",
  //     "username": "Samantha",
  //     "email": "Nathan@yesenia.net",
  //     "address": {
  //       "street": "Douglas Extension",
  //       "suite": "Suite 847",
  //       "city": "McKenziehaven",
  //       "zipcode": "59590-4157",
  //       "geo": {
  //         "lat": "-68.6102",
  //         "lng": "-47.0653"
  //       }
  //     },
  //     "phone": "1-463-123-4447",
  //     "website": "ramiro.info",
  //     "company": {
  //       "name": "Romaguera-Jacobson",
  //       "catchPhrase": "Face to face bifurcated interface",
  //       "bs": "e-enable strategic applications"
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "name": "Patricia Lebsack",
  //     "username": "Karianne",
  //     "email": "Julianne.OConner@kory.org",
  //     "address": {
  //       "street": "Hoeger Mall",
  //       "suite": "Apt. 692",
  //       "city": "South Elvis",
  //       "zipcode": "53919-4257",
  //       "geo": {
  //         "lat": "29.4572",
  //         "lng": "-164.2990"
  //       }
  //     },
  //     "phone": "493-170-9623 x156",
  //     "website": "kale.biz",
  //     "company": {
  //       "name": "Robel-Corkery",
  //       "catchPhrase": "Multi-tiered zero tolerance productivity",
  //       "bs": "transition cutting-edge web services"
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "name": "Chelsey Dietrich",
  //     "username": "Kamren",
  //     "email": "Lucio_Hettinger@annie.ca",
  //     "address": {
  //       "street": "Skiles Walks",
  //       "suite": "Suite 351",
  //       "city": "Roscoeview",
  //       "zipcode": "33263",
  //       "geo": {
  //         "lat": "-31.8129",
  //         "lng": "62.5342"
  //       }
  //     },
  //     "phone": "(254)954-1289",
  //     "website": "demarco.info",
  //     "company": {
  //       "name": "Keebler LLC",
  //       "catchPhrase": "User-centric fault-tolerant solution",
  //       "bs": "revolutionize end-to-end systems"
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "name": "Mrs. Dennis Schulist",
  //     "username": "Leopoldo_Corkery",
  //     "email": "Karley_Dach@jasper.info",
  //     "address": {
  //       "street": "Norberto Crossing",
  //       "suite": "Apt. 950",
  //       "city": "South Christy",
  //       "zipcode": "23505-1337",
  //       "geo": {
  //         "lat": "-71.4197",
  //         "lng": "71.7478"
  //       }
  //     },
  //     "phone": "1-477-935-8478 x6430",
  //     "website": "ola.org",
  //     "company": {
  //       "name": "Considine-Lockman",
  //       "catchPhrase": "Synchronised bottom-line interface",
  //       "bs": "e-enable innovative applications"
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "name": "Kurtis Weissnat",
  //     "username": "Elwyn.Skiles",
  //     "email": "Telly.Hoeger@billy.biz",
  //     "address": {
  //       "street": "Rex Trail",
  //       "suite": "Suite 280",
  //       "city": "Howemouth",
  //       "zipcode": "58804-1099",
  //       "geo": {
  //         "lat": "24.8918",
  //         "lng": "21.8984"
  //       }
  //     },
  //     "phone": "210.067.6132",
  //     "website": "elvis.io",
  //     "company": {
  //       "name": "Johns Group",
  //       "catchPhrase": "Configurable multimedia task-force",
  //       "bs": "generate enterprise e-tailers"
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "name": "Nicholas Runolfsdottir V",
  //     "username": "Maxime_Nienow",
  //     "email": "Sherwood@rosamond.me",
  //     "address": {
  //       "street": "Ellsworth Summit",
  //       "suite": "Suite 729",
  //       "city": "Aliyaview",
  //       "zipcode": "45169",
  //       "geo": {
  //         "lat": "-14.3990",
  //         "lng": "-120.7677"
  //       }
  //     },
  //     "phone": "586.493.6943 x140",
  //     "website": "jacynthe.com",
  //     "company": {
  //       "name": "Abernathy Group",
  //       "catchPhrase": "Implemented secondary concept",
  //       "bs": "e-enable extensible e-tailers"
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "name": "Glenna Reichert",
  //     "username": "Delphine",
  //     "email": "Chaim_McDermott@dana.io",
  //     "address": {
  //       "street": "Dayna Park",
  //       "suite": "Suite 449",
  //       "city": "Bartholomebury",
  //       "zipcode": "76495-3109",
  //       "geo": {
  //         "lat": "24.6463",
  //         "lng": "-168.8889"
  //       }
  //     },
  //     "phone": "(775)976-6794 x41206",
  //     "website": "conrad.com",
  //     "company": {
  //       "name": "Yost and Sons",
  //       "catchPhrase": "Switchable contextually-based project",
  //       "bs": "aggregate real-time technologies"
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "name": "Clementina DuBuque",
  //     "username": "Moriah.Stanton",
  //     "email": "Rey.Padberg@karina.biz",
  //     "address": {
  //       "street": "Kattie Turnpike",
  //       "suite": "Suite 198",
  //       "city": "Lebsackbury",
  //       "zipcode": "31428-2261",
  //       "geo": {
  //         "lat": "-38.2386",
  //         "lng": "57.2232"
  //       }
  //     },
  //     "phone": "024-648-3804",
  //     "website": "ambrose.net",
  //     "company": {
  //       "name": "Hoeger LLC",
  //       "catchPhrase": "Centralized empowering task-force",
  //       "bs": "target end-to-end models"
  //     }
  //   }
  // ]
  // i=0;

  // delete(i:any){
  //   this.data.splice(i,1);
  // }
  // Friday 25/02 Tasks

  // imgurl1 = ".././assets/images/wheat.jpg"
  // imgurl2 = ".././assets/images/rice.jpg"
  // imgurl3 = ".././assets/images/bajara.jpg"
  // details:any=[];
  // counter=1;
  // itemscart = [
  //   {
//   //     "id": 1,
//   //     "name": "Pearl Millet ",
//   //     "price": 100,
//   //     "quantity": "2000KG",
//   //     "location": "Surat",
//   //     "presentstock": "100KG"
//   //   }
//   // ]
//   // addcart(details:any)
//   // {
//   //   this.counter++;
//   //   this.itemscart.push(details);
//   // }


// //Date: 28/02 Use of services

// getdate:any;

// //Date: 28/02 Task1
// //Date: 28/02 Task 2 tranfer services from parents to child (used by datetimeservice service)


// jasonfiledata:any;
// counter:any;
// title = 'my-first-app';
// constructor(private dt:DatetimeserviceService, private jasondata:GetjasondataService)
// {
//   this.getdate = dt.today();
//   this.jasonfiledata = jasondata.getdata();
//   this.counter = dt.counterofservice();
//   this.dt.mylist;
// }
// updatecounter()
// {
//   this.counter++;
// }

// // Put parents data in child using services

// firstname = ""
// lastname =""
// additemtots()
// {
//   this.dt.setdata(this.firstname,this.lastname);
// }



// // ngform concept i used datetimeservice service for passdata to another componenet

// user:any =[{"email":'',"password":'',"address":''}];
// onsubmitofform(user:any)
// {
//   console.log(typeof(user));
//   this.dt.userdata.push(user);
// }

// //Task 5
// prtnumber = 0;
// numarray = [1,2,3,4,5,6,7,8,9,10];
// printtable(prtnumber:number)
// {
//   this.numarray = [1,2,3,4,5,6,7,8,9,10];
//   for(let i=0; i<10;i++)
//   {
//     this.numarray[i] = this.numarray[i]*prtnumber;
//   }
// }

// // Task 6

// Time = 0;
// days:any;
// price = 0;
// newprice = 0;
// date1:any="";
// date2:any="";
// dt1:any="";
// dt2:any="";
// countduration(date1:any,date2:any)
// {
//   this.dt1 = new Date(date1);
//   this.dt2 = new Date(date2);
//   this.Time = this.dt2.getTime() - this.dt1.getTime(); 
//   this.days = Math.abs(Math.ceil(this.Time / (1000 * 60 * 60 * 24)));
//   console.log(this.days*10);
// }
//

constructor(public ht:HttpDataRequestService){}
ngOnInit()
{
  this.ht.getdata().subscribe((data) => this.show(data));
}
myForm:any
htdata:any;
id=""
name=""
number=""
street=""
city=""
state=""
zip=""
show(data:any)
{
  this.htdata = data;
}

showdatatoform(id:any)
{
  console.log(id);
  this.name = this.htdata[id-1].Name;
  this.number = this.htdata[id-1].Mobileno;
  this.street = this.htdata[id-1].Street;
  this.city = this.htdata[id-1].City;
  this.state = this.htdata[id-1].State;
  this.zip = this.htdata[id-1].Zip;

}

}



