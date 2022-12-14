import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

const routes: Routes = [

  {
    path: 'account',
    component: LoginLayoutComponent,
    children: [
      
      {
        path: 'login',
        component: LoginComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
