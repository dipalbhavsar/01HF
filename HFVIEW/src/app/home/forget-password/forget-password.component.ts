import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  showUserLogin() {
    this.homeComponent.showLogInBox = true;
    this.homeComponent.showRegisterBox = false;
    this.homeComponent.showForgetPassowrdBox = false;
   }

   forgetPassword() {

   }
}
