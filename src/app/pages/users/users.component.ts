import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
clientList:any;
  constructor(private clientService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.getClients();
  }
  

  getClients(){
    this.clientService.getclients().subscribe((res:any)=>{
      this.clientList = res;
       this.clientList.forEach((a:any)=>{
       Object.assign(a,{firstname:a.first_name,lastname:a.last_name,status:a.account_status,phone:a.phone,
         account_number:a.account_number,
       address:a.address})
     })
 
 
   
 })
  }

}
