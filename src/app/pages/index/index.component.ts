import { Component, OnInit } from '@angular/core';
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

  constructor(private _chartsService: ChartsService,private roomService:RoomService,
    private guestService:GuestService) { }

  ngOnInit() {
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
}
