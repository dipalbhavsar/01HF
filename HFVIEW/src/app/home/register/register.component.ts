import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  showUserLogin() {
    this.homeComponent.showLogInBox = true;
    this.homeComponent.showRegisterBox = false;
    this.homeComponent.showForgetPassowrdBox = false;
   }
}
