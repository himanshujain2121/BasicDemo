import { Injectable } from '@angular/core';
import { Employee } from '../../employee/employee';

@Injectable()
export class EmployeeService {

  empList:Employee [] =[];
  constructor() { }

  getEmployeeList(){
    this.empList.push(
      { id: 1, name: 'Himanshu', email: 'himanshu@gmail.com', salary: 60000 },
      { id: 1, name: 'Namrata', email: 'namrata@gmail.com', salary: 20000 },
      { id: 1, name: 'Nishu', email: 'nishu@gmail.com', salary: 12000 },
      { id: 1, name: 'Ankush', email: 'ankush@gmail.com', salary: 37000 }
    );
    return this.empList;
  }

}
