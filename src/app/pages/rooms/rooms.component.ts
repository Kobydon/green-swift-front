import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room-service.service'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

 roomList:any;

  constructor(private roomService:RoomService,private router:Router) { }


  ngOnInit() {
    this.getRooms();
   }


getRooms(){

    this.roomService.getrooms().subscribe((res:any)=>{

      this.roomList = res;
      this.roomList.forEach((a:any) =>{
     Object.assign(a,{room_numer:a.room_number,status:a.status,room_type:a.room_type,
          reserved:a.reserved,floor:a.floor,occupancy_state:a.occupancy_state})


      })



    })
}

 
deleteRoom(id:number): void {
  // id = this.route.snapshot.paramMap.get('id')
// if(id){
  // console.log(id)
   this.roomService.deleteRoom(id).subscribe(success=> {
     this.getRooms();

  });	
  }
  


 
}
