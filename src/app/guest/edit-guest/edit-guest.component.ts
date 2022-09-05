import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../../services/guest-service.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.scss']
})
export class EditGuestComponent implements OnInit {

  constructor(private route:ActivatedRoute, private guestService:GuestService) { }

  ngOnInit() {
    this.getGuest();
  }

 getGuest(){
  const id :any= this.route.snapshot.paramMap.get('id');
   if(id!=null){
     
 	
  this.guestService.getGuest(id)
}


}



}
