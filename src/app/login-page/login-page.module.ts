import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent,
    LoginLayoutComponent
 
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
