import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emp : any;
  constructor(private service:EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(data=>{
      console.log(data);
      this.emp = data;
    })
  }

  addEmployees() {
    this.router.navigate(['form']);
  }

  remove(employeeId:number){
    if(confirm('Do you want to delete this employee?')){
    console.log(employeeId);
    this.service.deleteUsers(employeeId).subscribe(data =>{
      this.service.getEmployee();
      alert("Employee data deleted.")
    })
  }
  }
}
