import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template_Driven_Form';


  @ViewChild('registrationForm') form:NgForm;

    firstName:string=''
    lastName:string='';
    emailAddress:string='';


genders=[
  {id:'check-male', value:'male', display:'Male'},
  {id:'check-female', value:'female', display:'Female'},
  {id:'check-other', value:'other', display:'Prefer not to say'},
]


  onFormSubmit() {
    console.log(this.form );

    // METHOD-1 WE CAN ACCESS VALUE WITH FORM.VALUE
    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.country);

// METHOD-2 WE CAN ACCESS VALUE WITH CONTROLS ALSO
    console.log(this.form.controls['phone'].value);
    console.log(this.form.controls['dob'].value);
    console.log(this.form.controls['gender'].value);
    console.log(this.form.controls['street1'].value);
    console.log(this.form.controls['street2'].value);


    }
}
