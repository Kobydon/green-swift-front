import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';



import { FormControlName } from '@angular/forms';
import { userService } from '../../../services/user-service.service';
import { RoomService } from '../../../services/room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss']
})
export class RoomTypeComponent implements OnInit {
  createForm!:FormGroup; 
  submitted = false;
  loading = false;
  id?:string|null;
  base64_string:any;

  constructor(private fb:FormBuilder,private roomService:RoomService,private router:Router) {

    this.createForm = this.fb.group({

        room_type:['',Validators.required],
        base_occupancy :['',Validators.required],
        extral_bed_price:['',Validators.required],
        kids_occupancy :['',Validators.required],

        base_price:['',Validators.required],
        amenities :['',Validators.required], 
        description :['',Validators.required],

        image_one :['',Validators.required], 
        image_two :['',Validators.required],
        image_three :['',Validators.required]

    })





   }

   

  ngOnInit() {
  }



addType(record:any){
  console.log(record);
// this.submitted= true;

//   if(this.createForm.invalid){
//     return;
//   }
  const room_typ:any ={   
    room_type:record.room_type,
    base_occupancy:record.base_occupancy,
    extral_bed_price:record.extral_bed_price,
    kids_occupancy:record.kids_occupancy,
    base_price:record.base_price,
    amenities:record.amenities,  
    description:record.description,
    image_one:record.image_one,
    image_two:record.image_two,
    image_three:record.image_three   
  }
  room_typ.image_one= this.base64_string
  room_typ.image_two= this.base64_string
  room_typ.image_three= this.base64_string
this.roomService.postroom_type(room_typ).subscribe(success=>{this.router.navigate(['/pages/index'])})

}



handleUpload(event:any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
     this.base64_string = reader.result
  };

}





}