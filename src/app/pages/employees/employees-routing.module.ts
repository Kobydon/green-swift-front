import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [

  {
    path: 'employees',
    component:EmployeesLayoutComponent,
 
    children: [
 
        // {
        //   path:'employee-list',
        //   component:EmployeesListComponent
        // },
        // {
        //   path:'add-employee',
        //   component:AddEmployeesComponent
        // }
      
      ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
