import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { GuestService } from '../../services/guest-service.service';
import { RoomService } from '../../services/room-service.service';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  isCardNeeded =false;
  roomList:any;
  guestList:any;
  maleList:any;
  count:any;
  femaleList:any;
  public AnimationBarOption;
  chekoutList:any
  infoList:any;
  userinfoList:any;
  clientList:any;
  constructor(private _chartsService: ChartsService,private roomService:RoomService,
    private guestService:GuestService, private userService:EmployeeService) { }

  ngOnInit() {
    this.getInfo();
    this.getUserInfo();
   this.getclients();
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.getRoomList();
    this.guestService.getGuests().subscribe((res)=>{
      this.guestList = res;
     

   
   

    
    })
    this.guestService.getmaleGuests().subscribe((res)=>{
      this.maleList = res;
     
     
      
  
    })

    this.guestService.getfemaleGuest().subscribe((res)=>{
      this.femaleList = res;

    
    })


    this.guestService.getcheckOut().subscribe((res)=>{
      this.chekoutList = res;
     
     
      
   
   

    
    })
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  getRoomList(){
    this.roomService.getrooms().subscribe((res:any) =>{

      this.roomList = res;
      // this.count = res;
      // this.count.forEach((a:any)=>{
      //   Object.assign(a,{occupancy_state:a.occupancy_state=='true'})

      // })


      });

      this.roomService.getroom_number().subscribe((r:any) =>{

        this.count = r;
        // this.count = res;
        // this.count.forEach((a:any)=>{
        //   Object.assign(a,{occupancy_state:a.occupancy_state=='true'})
  
        // })
  
  
        });
  

  }

  

  getInfo(){
    this.userService.getInfo().subscribe((res:any)=>{
      this.infoList=res;
      this.infoList.forEach((a:any)=>{
        Object.assign(a,{status:a.account_status
         })
      })
  
      // console.log(this.infoList[0].account_status);
      if (this.infoList[0].account_status=="Frozen"){
        this.openPopup();
        }
    })
  
  }
  getUserInfo(){
    this.userService.getUserInfo().subscribe((res:any)=>{
      this.userinfoList=res;
      this.userinfoList.forEach((a:any)=>{
        Object.assign(a,{role:a.roles
         })
      })
  
  

    })
  }

  getclients(){
    this.userService.getclients().subscribe((res:any)=>{
      this.clientList=res;
      this.clientList.forEach((a:any)=>{
        Object.assign(a,{role:a.roles
         })
      })
  
  

    })
  }
}
