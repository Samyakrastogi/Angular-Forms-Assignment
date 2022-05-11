import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  
  constructor() { }
  formData = []; 
  ngOnInit(): void {
  }

  
  user = {
    username: "",
    college: "",
    cgpa: "",
    year: "",
    doj:"",
    skills: "",
    file :""
  }

  array:any=[];

  submitted = false;
  display_table =false;

  submitdata(data:any){
      if(data.valid){
        this.submitted=true;
      }
      else{
        alert("Please Enter Correct Details");
      }
  }

  adddata(data:any){
    this.submitted=false;
    this.display_table=true;
        let values = data.value;
        
        console.log(this.array);
        let obj: any = {
          
          username: values.username,
          college:values.college,
          cgpa: values.cgpa,
          year:values.year,
          doj:values.doj,
          skills: values.skills,
          file :values.file
        };    
        this.array.push(Object.values(obj));
        data.reset();
  }
}
