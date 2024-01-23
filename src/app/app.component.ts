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
    dob:string='';
    gender:string='';
    country:string='';
    city:string='';
    region:string='';
    postal:string='';
    userName:string=''
    isAgree:boolean=false;


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
    console.log(this.form.value.address.country);

// METHOD-2 WE CAN ACCESS VALUE WITH CONTROLS ALSO
    console.log(this.form.controls['phone'].value);
    console.log(this.form.controls['dob'].value);
    console.log(this.form.controls['gender'].value);
    console.log(this.form.controls['address'].value.street1);
    console.log(this.form.controls['address'].value.street2);
    console.log(this.form.value.username);



    // ASIGNED VALUE FOR DISPLAY DATA
    this.firstName = this.form.value.firstname;
    this.emailAddress = this.form.value.email;
    this.lastName = this.form.value.lastname;
    this.dob = this.form.value.dob;
    this.gender = this.form.value.gender;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.userName = this.form.value.username;
    this.isAgree= this.form.value.isAgree;


this.form.reset();

this.form.form.patchValue({
  gender:'male',
  address:{
    country:'India'
  }
})



    }

    generateUserName(){
      let username = '';
      if(this.firstName.length>3){
        username += this.firstName.slice(0,3);
      }else{
        username = this.firstName;
      }

      if(this.lastName.length>3){
        username += this.lastName.slice(0,3);
      }else{
        username += this.lastName;
      }

      // console.log(this.dob)
      let dateYear= new Date(this.form.controls['dob'].value);
      console.log(dateYear);

      username += dateYear.getFullYear();
      username = username.toLowerCase();
      console.log(username);
      this.form.value.username = username;


      // this.form.setValue({
      //   firstname:this.form.value.firstname,
      //   lastname:this.form.value.lastname,
      //   email:this.form.value.email,
      //   dob:this.form.value.dob,
      //   phone:this.form.value.phone,
      //   gender:this.form.value.gender,
      //   username:username,
      //   address:{
      //     street1:this.form.value.address.street1,
      //     street2:this.form.value.address.street2,
      //     country:this.form.value.address.country,
      //     city:this.form.value.address.city,
      //     region:this.form.value.address.region,
      //     postal:this.form.value.address.postal
      //   }
      // })


      this.form.form.patchValue({
        username:username
      })
    }
}
