
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, AddCustomerComponent, ShowCustomerComponent, LoginComponent, EditUserComponent, HomeComponent, NavbarComponent, RegisterComponent, CustomerDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
