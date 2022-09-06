import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    // EmployeesListComponent,
    
      EditEmployeesComponent,
       EmployeesLayoutComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
