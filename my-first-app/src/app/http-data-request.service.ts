import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) { }

  // getdata()
  // {
  //   return this.ht.get("https://jsonplaceholder.typicode.com/users");
  // }

  url = "http://localhost:3000/movies";
  getdata()
  {
    return this.ht.get("http://localhost:3000/movies");
  }
}

