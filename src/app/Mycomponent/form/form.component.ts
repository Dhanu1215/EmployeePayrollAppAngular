import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  date = {
    "day": '',
    "month": '',
    "year": ''
  }
 dept= [{
   "Hr" : '',
   "sales" : "",
   "engineer" : ""
 
 }]
  empData = {
    username: '',
    notes: '',
    profile: '',
    gender: '',
    department: [],
    salary: '',
    startdate: this.date
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit() {
    console.log('form is submitted:', this.empData);
    console.log(this.empData);
    
  }

}


