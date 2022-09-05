import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  isCardNeeded =true;
 employeeList:any;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
  }

getEmployees(){
this.employeeService.getemployees().subscribe((res:any)=>{
     this.employeeList = res;
      this.employeeList.forEach((a:any)=>{
      Object.assign(a,{firstname:a.first_name,lastname:a.last_name,gender:a.gender,phone:a.phone,
        session:a.session,
      address:a.address,salary:a.salary,empoyee_date:a.created_date})
    })


  
})
}

}
