import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //Create object to store employee data
  emp: any;
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    //Get API to get data from DB in table
    this.service.getEmployee().subscribe(data => {
      //console.log(data);
      this.emp = data;
    })
  }

  //Call function to navigate the form page
  addEmployees() {
    this.router.navigate(['form']);
  }

  //Call function to delete data from DB
  remove(employeeId: number) {
    if (confirm('Do you want to delete this employee?')) {
      console.log(employeeId);
      this.service.deleteUsers(employeeId).subscribe(data => {
        this.service.getEmployee();
        alert("Employee data deleted.");
        window.location.reload();
      })
    }
  }

  //Call function to navigate data by id
  edit(employeeId: number) {
    this.router.navigate(['form', employeeId]);
  }
}
