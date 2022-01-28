import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  employee = new Employee("",0,"",new Date,"","",[]);

  constructor(private router:Router, private service:EmployeeService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data =>console.log(data));
    this.router.navigate(['dashboard'])
    alert("Form is Submitted");
  }

  handleBack(){
    this.router.navigate([''])
  }

  departmentList: Array<any> = [
    {
      name: "HR",
      value: "HR",
      checked: false

    },
    {
      name: "Sales",
      value: "Sales",
      checked: false
    },
    {
      name: "Finance",
      value: "Finance",
      checked: false
    },
    {
      name: "Engineer",
      value: "Engineer",
      checked: false
    },
    {
      name: "Other",
      value: "Other",
      checked: false
    },
  ]
  
}


