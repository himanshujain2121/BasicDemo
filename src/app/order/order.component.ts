import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group(
      {
        orderId: new FormControl(''),
        customerName: new FormControl(''),
        email: new FormControl(''),
        mobile: new FormControl(''),
        address:this.fb.group(
          {
            address1: new FormControl(),
            address2: new FormControl(),
            city: new FormControl(),
            pin: new FormControl(),
          }
        )
      }
    )
  }

}
