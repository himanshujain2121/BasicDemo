import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Basic Demo';

  constructor( private employeeService:EmployeeService){}

  ngOnInit(){
  }
  addEmployee(){
           this.employeeService.addEmployee();
  }
}
