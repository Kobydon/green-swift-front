import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../../services/room-service.service';


@Component({
  selector: 'app-rooms-status',
  templateUrl: './rooms-status.component.html',
  styleUrls: ['./rooms-status.component.scss']
})
export class RoomsStatusComponent implements OnInit {
  roomList:any;
  constructor(private roomService:RoomService,private routter:Router) { }

  ngOnInit() {
    this.getRooms()
  }


  getRooms(){
    this.roomService.getrooms().subscribe((res:any) =>{

      this.roomList = res;
     
      this.roomList.forEach((a:any)=>{
        Object.assign(a,{occupancy_state:a.occupancy_state,room_number:a.room_number,
        status:a.status})

      })


      });
  }

}
