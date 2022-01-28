import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
  constructor(private http:HttpClient){}

  insertEmployee(employee:any){
   console.log(employee);
    return this.http.post("http://localhost:8080/employeePayrollservice/create",employee);
  }
  
  getEmployee(){
    return this.http.get("http://localhost:8080/employeePayrollservice/get");
  }

  deleteUsers(employeeId:number){
    return this.http.delete("http://localhost:8080/employeePayrollservice/delete/"+employeeId);
  }

  editUsers(employeeId:number,emp: any){
    return this.http.put("http://localhost:8080/employeePayrollservice/update/"+employeeId,emp);
  }
}
