/* Angular Dependancies Starts here */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CookieService } from 'ngx-cookie-service';
/* Angular Dependancies Ends here */

/* External Dependancies Starts here */
//import { DataTablesModule } from 'angular-datatables';
//import { ModalModule } from 'ngx-bootstrap';
//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
/* External Dependancies Ends here */

/* Components Starts here */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
/* Components Ends here*/

/* Services Starts here */

/* Services Ends here */


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],

  entryComponents: [
    LoginComponent
  ],
  
  imports: [
    BrowserModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
