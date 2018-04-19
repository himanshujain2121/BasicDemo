import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validator, Validators } from '@angular/forms';

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
        orderId: new FormControl('',[Validators.required, Validators.min(1)]),
        customerName: new FormControl('',[Validators.required,Validators.minLength(4)]),
        email: new FormControl('',[Validators.required]),
        mobile: new FormControl('',[Validators.required]),
        address:this.fb.group(
          {
            address1: new FormControl('',[Validators.required]),
            address2: new FormControl('',[Validators.required]),
            city: new FormControl('',[Validators.required]),
            pin: new FormControl('',[Validators.required]),
          }
        )
      }
    )
  }

  saveOrder(){
    console.log(this.orderForm.value);
  }

}
