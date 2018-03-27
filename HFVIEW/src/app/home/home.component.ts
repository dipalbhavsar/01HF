import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showLogInBox = true;
  showRegisterBox = false;
  showForgetPassowrdBox = false;

  ngOnInit() {
  }

  /*showRegister() {
    this.showLogInBox = false;
    this.showRegisterBox = true;
    this.showForgetPassowrdBox = false;
  }

  showForgetPassword() {
    this.showLogInBox = false;
    this.showRegisterBox = false;
    this.showForgetPassowrdBox = true;
  }*/
}
