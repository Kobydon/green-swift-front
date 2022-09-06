import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,FormControlName} from '@angular/forms';
import { PaymentService } from '../../../services/payment-service.service';
import { GuestService } from '../../../services/guest-service.service';
import { RoomService } from '../../../services/room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.scss']
})
export class AddPaymentsComponent implements OnInit {
  createForm!:FormGroup;  
  submitted = false;
  roomList:any
  guestList:any
  roomTypeList:any
  roomForList :any
  guestInfo:any
  constructor( private fb:FormBuilder,private roomService:RoomService,
    private guestService:GuestService,private paymentService:PaymentService,
    private router:Router) { 

    
    this.createForm = this.fb.group({

      name:['',Validators.required],
      Amount:['',Validators.required],
  
      floor:['',Validators.required],
      duration:['',Validators.required],
      // reserved:['',Validators.required],
      method:['',Validators.required],
      room_type :['',Validators.required],
      discount :['',Validators.required],
      payment_date :['',Validators.required],

      check_in_date :['',Validators.required],
      check_out_date :['',Validators.required],
      address :['',Validators.required]



    })
  }

  ngOnInit() {
    this.getRooms();
    this.getGuest();
    this.getroomType();
   

    // this.setRoomPrice();
  }

  addPayment(record){
    const payment:any = {
      amount:record.Amount,    
      name: record.name,
      address: this.guestInfo[0].address, 
      floor: record.floor,
      duration: record.duration,

      method: record.method,
      room_type : record.room_type,
      discount : record.discount,
      payment_date : record.payment_date,
      check_in_date: this.guestInfo[0].arrival_date ,
      check_out_date: this.guestInfo[0].checkout_date 
    }
    if(this.createForm.value.discount<1){
     payment.amount = this.roomForList[0].base_price*this.createForm.value.duration 
    }

    else{
      payment.amount =this.roomForList[0].base_price*this.createForm.value.duration - 
      this.roomForList[0].base_price *this.createForm.value.duration*this.createForm.value.discount/100
    }
    if(this.createForm.value.discount==""){
      payment.discount= "0";
     }
 

    this.paymentService.addPayment(payment).subscribe((success)=>{
      this.router.navigate(['/pages/payment-list'])
    })
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

getroomType(){
  this.roomService.getroomType().subscribe(res =>   {

    this.roomTypeList = res;
    this.roomTypeList.forEach((a:any)=> {
      Object.assign(a,{room_type:a.room_type,price:a.base_price})
    });


   })
    
}      
getGuest(){
  this.guestService.getGuests().subscribe((res)=>{
    this.guestList=res;
    this.guestList.forEach((a:any)=>{

      Object.assign(a,{name:a.first_name,lastname:a.last_name,gender:a.gender,phone:a.phone_number,checkout:a.checkout_date,
      address:a.address,room_number:a.room_number})
    })
  })
}

getroom_for(){
  const find ={
    id: this.createForm.value.room_type
    
  }
  this.roomService.getroom_for(find.id).subscribe(res =>{
    this.roomForList = res
    this.roomForList.forEach((a:any)=>{

      Object.assign(a,{price:a.base_price
     })
    })
  })
}

get_guest_detail(){
  const find ={
    name: this.createForm.value.name
    
  }
  this.guestService.getGuest_info(find.name).subscribe(res =>{
    this.guestInfo = res
    this.guestInfo.forEach((a:any)=>{

      Object.assign(a,{checkout_date:a.checkout_date,checkin_date:a.arrival_date,adress:a.address
     })
    })
  })

}

// setRoomPrice(){
//   this.roomService.getroomType().subscribe(data =>   {

 
//     if (data[0].room_type== data[0].room_type){
//       this.createForm.setValue({
//           amount: data[0].base_price
//       })
//     }
  
  

//    })

//   }
}
