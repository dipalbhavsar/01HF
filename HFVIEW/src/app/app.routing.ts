import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgetPasswordComponent } from './home/forget-password/forget-password.component';

const appRoutes: Routes = [
    // otherwise redirect to home
    { path: '',          component: LoginComponent },
    { path: 'signup',    component: RegisterComponent  },
    { path: 'forgetpassword',  component: ForgetPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
