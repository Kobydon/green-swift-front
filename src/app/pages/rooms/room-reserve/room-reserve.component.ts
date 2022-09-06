import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room-service.service';
import { FormControlName } from '@angular/forms';
import{GuestService} from '../../../services/guest-service.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-reserve',
  templateUrl: './room-reserve.component.html',
  styleUrls: ['./room-reserve.component.scss']
})
export class RoomReserveComponent implements OnInit {
  createForm:FormGroup;
  roomList:any;
  roomTypeList:any;
  guestList:any;
  constructor( private roomService:RoomService,private router:Router,
    private fb:FormBuilder,private route:ActivatedRoute,private guestService:GuestService,
    private toastr:ToastrService) {

      this.createForm = this.fb.group({

          
        
        name:['',Validators.required],
        type:['',Validators.required],
        country:['',Validators.required],
        Language:['',Validators.required],
        purpose:['',Validators.required],
        night:['',Validators.required],
        checkin:['',Validators.required],
        departure:['',Validators.required],
        checkout :['',Validators.required],
        arrival :['',Validators.required],
        adult :['',Validators.required],
        children:['',Validators.required],



        room_number:['',Validators.required],
        checkout_date:['',Validators.required],
        rate:['',Validators.required],
        amount:['',Validators.required],
        discount_type :['',Validators.required],
        discount_value :['',Validators.required],
        payment_type :['',Validators.required],
        status:['',Validators.required],
        // first_name:['',Validators.required],
        // last_name:['',Validators.required],
        // region:['',Validators.required],
      
        
        
  
        
  
      })

   
     }

  ngOnInit() {
    this.roomService.getAvailable_rooms().subscribe(res =>   {

      this.roomList = res;
      this.roomList.forEach((a:any)=> {
        Object.assign(a,{room_number:a.room_number,occupancy_state:a.occupancy_state})
      });


     })

     this.roomService.getroomType().subscribe(res =>   {

      this.roomTypeList = res;
      this.roomTypeList.forEach((a:any)=> {
        Object.assign(a,{room_type:a.room_type})
      });


     })
     this.guestService.getGuests().subscribe((res)=>{
      this.guestList=res;
      this.guestList.forEach((a:any)=>{
  
        Object.assign(a,{name:a.first_name,lastname:a.last_name,gender:a.gender,phone:a.phone_number,checkout:a.checkout_date,
        address:a.address,room_number:a.room_number})
      })
    })
  }

}
