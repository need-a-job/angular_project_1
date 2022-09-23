import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/interfaces/User';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Person = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    adress: '',
    notes: '',
  };
  constructor(private bs: CustomerService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.bs.addUsers(this.customer).then(() => {
      alert('User was added successfully');
      this.reset()
    }).catch((error) => console.log(error));
    
  }

  reset(): void {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      adress: '',
      notes: '',
    };
  }
}
