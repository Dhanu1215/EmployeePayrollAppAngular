export class Employee{
   
    name: String;
    note: String;
    profilePic: String;
    gender: String;
    departments: [];
    salary: number;
    startdate: Date;

    constructor( name: String, salary: number,gender: String,startdate: Date, note: String, profilePic: String, departments: []
         ) {
      
        this.name = name;
        this.note= note;
        this.profilePic= profilePic;
        this.gender= gender;
        this.departments= departments;
        this.salary= salary;
        this.startdate= startdate;
    }
    
    }