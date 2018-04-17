import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string = 'Employee works';
  visible: boolean = false;
  role:string = "user";
  employee: Employee[] = [
    { id: 1, name: 'Himanshu', email: 'himanshu@gmail.com', salary: 60000 },
    { id: 1, name: 'Namrata', email: 'namrata@gmail.com', salary: 20000 },
    { id: 1, name: 'Nishu', email: 'nishu@gmail.com', salary: 12000 },
    { id: 1, name: 'Ankush', email: 'ankush@gmail.com', salary: 37000 }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.visible = !this.visible;
  }

}
