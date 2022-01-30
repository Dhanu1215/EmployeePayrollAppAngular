import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient){}

  //To add data in DB
  insertEmployee(employee:any){
    return this.http.post("http://localhost:8080/employeePayrollservice/create",employee);
  }
  
  //Request to get data from DB
  getEmployee(){
    return this.http.get("http://localhost:8080/employeePayrollservice/get");
  }

  //Request to delete data from DB
  deleteUsers(employeeId:number){
    return this.http.delete("http://localhost:8080/employeePayrollservice/delete/"+employeeId);
  }

  //Request to get data from DB by id
  getById(employeeId:number){
    return this.http.get("http://localhost:8080/employeePayrollservice/get/"+employeeId);
  }

  //Request to update data from DB
  editUsers(id:number, employee: any){
    return this.http.put("http://localhost:8080/employeePayrollservice/update/"+id,employee);
  }
}
