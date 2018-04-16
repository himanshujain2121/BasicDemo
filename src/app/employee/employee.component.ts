import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title:string = 'Employee works';
  visible:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.visible = !this.visible;
  }

}
