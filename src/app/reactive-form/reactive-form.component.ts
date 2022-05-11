import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Arrays fro storing user data
  array:any =[]
  userarray:any=[]

  // Validation varaibles
  submitted= false;
  showloginform = true;
  display_table =false;
  showsignupform = false;
  issamename=false;
  issamepass=false;
 

  //forms for login and signup
  loginForm = new FormGroup({
    usernames : new FormControl('' , Validators.required),
    passwords : new FormControl('' ,Validators.required)
  })

  signupForm = new FormGroup({
    username : new FormControl('' , Validators.required),
    password : new FormControl('' ,Validators.required),
    father : new FormControl('' , Validators.required),
    email : new FormControl('' , [Validators.required , Validators.email]),
    mobile : new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })


  //function for login form validation
  submitData(){
    let obj1: any = {
          
      usernames: this.loginForm.value.usernames,
      passwords : this.loginForm.value.passwords,
    };

    for(let i=0;i<this.array.length;i++)
    {
      for(let items of this.array[i])
      {
        if(obj1.usernames == items )
        {
          this.issamename=true;
        }
        if(obj1.passwords == items){
          this.issamepass=true;
        }
      }
    }
    if(this.issamename && this.issamepass){
      this.submitted =true;
    }
    else{
      alert("Check Username and Password")
      this.issamename=false;
      this.issamepass=false;
    }
    
  }


   // signup form funcitons
   obj3: any = {
    username: '',
    password : '',
    father :'',
    email :'',
    mobile :''
  };

  //function for displaying signup form
  showSignupForm(){
    this.showsignupform = true;
    this.showloginform = false;
  }


  //funciton fro storing user info after signup
  collectData(){
    let obj2: any = {
      username: this.signupForm.value.username,
      password : this.signupForm.value.password,
      father :this.signupForm.value.father,
      email :this.signupForm.value.email,
      mobile :this.signupForm.value.mobile
    };
    if((obj2.email == this.obj3.email ) || (obj2.username == this.obj3.username)){
      alert("User Already Exist")
    }
    else{
     this.obj3 = Object.assign({}, obj2)
     this.array.push(Object.values(this.obj3));
     this.showsignupform = false;
     this.showloginform=true;
     alert("Signup Completed")
    }
    this.submitted=false;
    console.log(this.obj3)
    console.log(this.array)
  }

  // function for adding data to table
  adddata(){
    for(let  i=0;i<this.array.length;i++){
      if(this.issamename && this.issamepass){
        this.userarray[i] = this.array[i] 
      }
      
      else{
        this.issamename=false;
        this.issamepass=false;
      }
    }
    this.display_table=true;
  
  } 
}
