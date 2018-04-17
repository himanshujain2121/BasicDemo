import { Injectable } from '@angular/core';
import { Employee } from '../../employee/employee';

@Injectable()
export class EmployeeService {

  empList:Employee [] =[];
  constructor() { }

  getEmployeeList(){
    this.empList = [
      { id: 1, name: 'Himanshu', email: 'himanshu@gmail.com', salary: 60000 },
      { id: 2, name: 'Namrata', email: 'namrata@gmail.com', salary: 20000 },
      { id: 3, name: 'Nishu', email: 'nishu@gmail.com', salary: 12000 },
      { id: 4, name: 'Ankush', email: 'ankush@gmail.com', salary: 37000 }
  ];
    return this.empList;
  }

  addEmployee(){
    let employee =  { id: 5, name: 'Arpit', email: 'arpit@gmail.com', salary: 450000 };
    this.empList.push(employee);
  }

}
