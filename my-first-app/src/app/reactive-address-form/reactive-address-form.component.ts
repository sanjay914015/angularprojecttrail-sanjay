import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm:any;
  ngOnInit(): void{
    this.myForm = this.fb.group({
        name:['', Validators.required],
        mobilenumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        street:['', Validators.required],
        city:['', Validators.required],
        state:['', Validators.required],
        zip:['', Validators.required],
        startdate:['',Validators.required],
        enddate:['',Validators.required]
      });
  }

  onSubmit(form: FormGroup)
  {
    console.log('valid?',form.valid);
    console.log('name', form.value.name);
    console.log('Mobile No', form.value.mobilenumber);
    console.log('street', form.value.street);
    console.log('City', form.value.city);
    console.log('State', form.value.state);
    console.log('Zip', form.value.zip);
    console.log('StartDate',form.value.startdate);
    console.log('EndDate',form.value.enddate)
  }
  get m(){
    return this.myForm.controls;
  }
}
