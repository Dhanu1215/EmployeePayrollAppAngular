import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  //Create object to get store data of employee
  employee = new Employee("", 0, "", new Date, "", "", "");

  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  id: number = this.route.snapshot.params['employeeId'];

  ngOnInit(): void {

    //Get data by id API
    this.service.getById(this.id).subscribe((data: any) => {
      //console.log(this.id);
      //console.log(data.data);
      this.employee = data.data;
      //console.log(this.employee);
      this.employee.name = data.data.name;
      this.employee.departments = data.data.departments;
      this.employee.gender = data.data.gender;
      this.employee.salary = data.data.salary;
      this.employee.note = data.data.note;
      this.employee.profilePic = data.data.profilePic;
      this.employee.startdate = data.data.startdate;
    })
  }

  //Call function to add data in Db
  handleSubmit() {
    //console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data => console.log(data));
    this.router.navigate(['dashboard'])
    alert("Form is Submitted");
  }

  //Call function to navigate home page
  handleBack() {
    this.router.navigate([''])
  }

  //Call function to get department data
  getValue(value: String) {
    //console.log(value);
    this.employee.departments = value;
  }

  // Call function to update data
  handleUpdate() {
    this.service.editUsers(this.id, this.employee).subscribe(data => {
      //console.log(data);
      this.router.navigate(['dashboard']);
    });

  }
}


