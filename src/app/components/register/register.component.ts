import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInfo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}
  submitRegister() {
    this.as
      .register(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.as.setSessionData('username', data.user.email as string);
        this.as.setSessionData('isLoggedIn', 'true');
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        alert('u stupid if u got here :)');
        this.user = { email: '', password: '' };
      });
  }
}
