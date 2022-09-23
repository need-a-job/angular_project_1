import { Component, OnInit } from '@angular/core';
import { deleteUser } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/interfaces/User';
import { CustomerService } from 'src/app/services/customer.service';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  user: Person[] = [];

  constructor(
    private bs: CustomerService,
    private modal: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bs.getUsers().subscribe((userData: Person[]) => {
      this.user = userData;
    });
  }
  deleteUser(user: Person): void {
    if (confirm('Are you sure')) {
      this.bs
        .deleteUsers(user)
        .then(() => alert('Users deleted successfully'))
        .catch((err) => console.log(err));
    }
  }
  updateUser(user: Person): void {
    const modalRef = this.modal.open(EditUserComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = user.id;
  }
  userDetail(user: Person) {
    const detail = user.id
    this.router.navigateByUrl('customerDetail') 
    
  }
}
