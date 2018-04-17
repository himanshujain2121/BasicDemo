import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  // Parent to child communication where parent = employee, child = employee-list
  @Input() employeeList:Employee[];
  // child to parent communication based on click , parent = employee, child = employee-list
  @Output() childSelectedEmployee:EventEmitter<Employee> = new EventEmitter<Employee>();
  ngOnInit() {
  }

  selectEmployee(emp:Employee){
    console.log(emp);
     this.childSelectedEmployee.emit(emp);
  }

}
