import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/User';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  @Input() id?: string;
  user: Person = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    adress: '',
    notes: '',
  };
  activeModal: any;
  constructor(private bs: CustomerService) {}

  ngOnInit(): void {
    if (this.id) {
      this.bs.getUserById(this.id).subscribe((userData: Person) => {
        this.user = userData;
      });
    }
  }

  updateUser(): void {
    this.bs
      .updateUSers(this.user)
      .then(() => {
        this.activeModal.close();
        alert('User updated successfully');
      })
      .catch((err) => console.log(err));
  }
}
