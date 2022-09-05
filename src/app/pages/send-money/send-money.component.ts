import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
infoList:any;
  constructor( private userService:EmployeeService) { }

  ngOnInit() {
    this.getInfo();
  }


  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  getInfo(){
    this.userService.getInfo().subscribe((res:any)=>{
      this.infoList=res;
      this.infoList.forEach((a:any)=>{
        Object.assign(a,{status:a.account_status
         })
      })
  
      // console.log(this.infoList[0].account_status);
      
    })
  
  }

  sendMoney(){
    if (this.infoList[0].account_status=="Frozen"){
      this.openPopup();
      }
  }
}

