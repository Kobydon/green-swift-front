import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../../../services/guest-service.service';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.scss']
})
export class ViewGuestComponent implements OnInit {
   guestList:any;
  constructor(private guestService:GuestService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
     this.getguest();
  }

  
  getguest(): void {
		const id :any= this.route.snapshot.paramMap.get('id');
    if(id!=null){
		
		this.guestService.getGuest(id).subscribe((res)=>{
      this.guestList=res;
      this.guestList.forEach((a:any)=>{

        Object.assign(a,{firstname:a.first_name,lastname:a.last_name,gender:a.gender,phone:a.phone_number,checkout:a.checkout_date,
        address:a.address,room_number:a.room_number,id_type:a.id_type,
      id_number:a.id_number,arrival_date:a.arrival_date,has_checkout:a.has_checkout})
      })
    });
	}
}

checkout(){
    
  const id_u =this.route.snapshot.paramMap.get('id')
  if(id_u){
    const guest_u:any ={

      id: id_u,
    }
      this.guestService.checkout(guest_u).subscribe((success)=>{
        this.router.navigate(['/pages/guest-list'])
      })

  }       
}

}
