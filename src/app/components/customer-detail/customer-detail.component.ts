import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/User';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() id?: string;
  user: Person = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    adress: '',
    notes: '',
  }
  activeModal: any;
  constructor(private bs: CustomerService) { }

  ngOnInit(): void {
    if (this.id) {
      this.bs.getUserById(this.id).subscribe((userData: Person) => {
        this.user = userData;
      });
    }
  }

}
