import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest-service.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
guestList:any;
  constructor(private guestService:GuestService) { }

  ngOnInit() {
  this.getGuest();
  }

 
deleteGuest(id:number): void {
  // id = this.route.snapshot.paramMap.get('id')
  // if(id){
  // console.log(id)
   this.guestService.deleteGuest(id).subscribe(success=> {
     this.getGuest()

  });	
  }
  
  getGuest(){
    this.guestService.getGuests().subscribe((res)=>{
      this.guestList=res;
      this.guestList.forEach((a:any)=>{

        Object.assign(a,{name:a.first_name,gender:a.gender,phone:a.phone_number,checkout:a.checkout_date,
        address:a.address,room_number:a.room_number,has_checkout:a.has_checkout})
      })
    })
  }
}
