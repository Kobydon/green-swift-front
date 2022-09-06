import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room-service.service';
import { FormControlName } from '@angular/forms';
import{GuestService} from '../../../services/guest-service.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {
 
  base64_string:any;
  // @Input() ad: Adds ={brand:'',category:'',condition:'',price:'',description:'',
  //                     phone:'',negotiable:'',city:'',image:'',post_by_id:''};
  //  login:Login[]=[];
  createForm!:FormGroup;  
  submitted = false;
  loading = false;
  id?:string|null;
  title ='Create Ad';
  isNew = true;
  post = true;
  update = false;
  i_id !:number;
  public roomList:any;
 

  constructor(
    private roomService:RoomService,private router:Router,
      private fb:FormBuilder,private route:ActivatedRoute,private guestService:GuestService,
      private toastr:ToastrService
     ) {

        this.createForm = this.fb.group({

          
        
          room_number:['',Validators.required],
          username:['',Validators.required],
          email:['',Validators.required],
          password:['',Validators.required],
          confirm_password:['',Validators.required],
          dob:['',Validators.required],
          country:['',Validators.required],
          arrival_date :['',Validators.required],
          photo :['',Validators.required],
          id_type :['',Validators.required],
          id_upload:['',Validators.required],



          id_number:['',Validators.required],
          checkout_date:['',Validators.required],
          remark:['',Validators.required],
          work:['',Validators.required],
          city :['',Validators.required],
          gender :['',Validators.required],
          phone :['',Validators.required],
          address:['',Validators.required],
          first_name:['',Validators.required],
          last_name:['',Validators.required],
          region:['',Validators.required],
        
          
          
    
          
    
        })

     

  }

  ngOnInit() {
    this.roomService.getAvailable_rooms().subscribe(res =>   {

      this.roomList = res;
      this.roomList.forEach((a:any)=> {
        Object.assign(a,{room_number:a.room_number,occupancy_state:a.occupancy_state})
      });


     })
     this.getGuest();
  }

  addGuest(record){
    const guest : any ={

      room_number: record.room_number,
      username: record.username,
  
      email: record.email,
      password: record.password,
      dob: record.dob,
      country: record.country,
      arrival_date : record.arrival_date,
      photo : record.photo,
      id_type : record.id_type,
      id_upload: record.id_upload,

      id_number: record.id_number,
      checkout_date: record.checkout_date,
      remark: record.remark,
      work: record.work,
      city : record.city,
      gender : record.gender,
      phone : record.phone,
      address: record.address,
      confirm_password:record.confirm_password,
      first_name:record.first_name,
      last_name:record.last_name,
      region:record.region
    
 

    }
    guest.photo= this.base64_string
    guest.id_upload= this.base64_string
    // console.log(guest.password)
    // console.log(guest.confirm_password)
    // guest.image_three= this.base64_string
    if(guest.password ==guest.confirm_password){
      this.guestService.addGuest(guest).subscribe(success=>{this.router.navigate(['/pages/guest-list '])})
    }

  
    else{
      this.toastr.error(null,"password fields does not match")
    }
  }





  getGuest(){
    const id :any= this.route.snapshot.paramMap.get('id');
     if(id){
      this.post = false
      this.update= true 
     
    this.guestService.getGuest(id).subscribe(data=>{

console.log(data[0].country);
      this.createForm.setValue({

        first_name:data[0].first_name,
        last_name:data[0].last_name,    
        username: data[0].username,
        room_number: data[0].room_number,
        email:"k@mail.com",
        password: data[0].password,
        confirm_password:data[0].password,
        dob: data[0].dob,
        phone :data[0].phone_number,
   
        arrival_date :data[0].arrival_date,
        checkout_date:data[0].checkout_date,
        id_number:data[0].id_number,
  
        remark:data[0].remark,
        work:data[0].work,

        region:data[0].region,
        city :data[0].city,
        address: data[0].address,
        gender :data[0].gender,
        country: data[0].country,
        id_type : data[0].id_type,
         photo : data[0].id_photo,
  
        id_upload:data[0].id_photo ,


   
        
    

      })



    })


  }
}
  
save() {
       
   const id_u =this.route.snapshot.paramMap.get('id')
  if(id_u){
   const guest_u:any ={

    id: id_u,
    room_number: this.createForm.value.room_number,
    username:this.createForm.value.username,

    email: this.createForm.value.email,
    password: this.createForm.value.password,
    dob: this.createForm.value.dob,
    country:this.createForm.value.country,
    arrival_date : this.createForm.value.arrival_date,
    photo : this.createForm.value.photo,
    id_type : this.createForm.value.id_type,
    id_upload: this.createForm.value.id_upload,

    id_number: this.createForm.value.id_number,
    checkout_date: this.createForm.value.checkout_date,
    remark:this.createForm.value.remark,
    work:this.createForm.value.work,
    city : this.createForm.value.city,
    gender :this.createForm.value.gender,
    phone : this.createForm.value.phone,
    address: this.createForm.value.address,
    confirm_password:this.createForm.value.confirm_password,
    first_name:this.createForm.value.first_name,
    last_name:this.createForm.value.last_name,
    region:this.createForm.value.region
  


  }
  guest_u.photo= this.base64_string
  guest_u.id_upload= this.base64_string
 this.guestService.updateGuest(guest_u).subscribe((success)=>{
  this.router.navigate(['/pages/guest-list']);	
 })
  }
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
