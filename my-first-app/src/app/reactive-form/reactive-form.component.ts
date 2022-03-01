import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm:any;
  ngOnInit(): void{
    this.myForm = this.fb.group({
        name:'James',
        email:'',
        message:''
      });
  }

  onSubmit(form: FormGroup)
  {
    console.log('name', form.value.name);
    console.log('email', form.value.email);
    console.log('message', form.value.message);
  }
}
