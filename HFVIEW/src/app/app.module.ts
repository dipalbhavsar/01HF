/* Angular Dependancies Starts here */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Angular Dependancies Ends here */



/* Components Starts here */
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './home/forget-password/forget-password.component';
import { RouterModule } from '@angular/router';

/* Components Ends here*/

/* Services Starts here */

/* Services Ends here */


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }