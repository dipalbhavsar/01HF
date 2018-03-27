import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private homeComponent: HomeComponent) {}

  userName = '';
  password = '';
  customerCount = 0;
  isDisable = false;
  errorMessage = '';

  ngOnInit() { }

  logInUser() {
    this.errorMessage = this.validateUser();
    this.isDisable = true;
  }

  validateUser() {
    let errrMessage = '';
    if (this.userName === '') {
      errrMessage = 'Please enter user name';
    } else if (this.password === '') {
      errrMessage = 'Please enter password';
    }
    return errrMessage;
  }

  clear() {
    this.errorMessage = '';
    this.userName = '';
    this.password = '';
  }

  emitForgotPasswordInHomeCompoent() {
    if (!this.isDisable) {
      this.clear();
    }
  }

  showUserRegistration() {
    this.homeComponent.showLogInBox = false;
    this.homeComponent.showRegisterBox = true;
    this.homeComponent.showForgetPassowrdBox = false;
  }

  showForgetPassword() {
    this.homeComponent.showLogInBox = false;
    this.homeComponent.showRegisterBox = false;
    this.homeComponent.showForgetPassowrdBox = true;
  }
}
