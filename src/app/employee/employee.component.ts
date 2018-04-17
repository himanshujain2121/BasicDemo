import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../service/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string = 'Employee works';
  visible: boolean = false;
  role:string = "user";
  afterSelectedEmployee:Employee;
  employee: Employee[] = [];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.loadEmployee();
  }
  toggle() {
    this.visible = !this.visible;
  }

  receiveFromParent(emp:Employee){
    this.afterSelectedEmployee = emp;
  }

  loadEmployee(){
    this.employee  = this.employeeService.getEmployeeList();
  }
}
