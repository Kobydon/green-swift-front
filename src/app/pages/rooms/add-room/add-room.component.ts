import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room-service.service';
import { FormControlName } from '@angular/forms';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {


    
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
  public roomTypeList:any;

  constructor(
    private roomService:RoomService,private router:Router,
      private fb:FormBuilder,private route:ActivatedRoute
     ) {

        this.createForm = this.fb.group({

          room_number:['',Validators.required],
          room_type:['',Validators.required],
      
          floor:['',Validators.required],
          duration:['',Validators.required],
          reserved:['',Validators.required],
          room_select:['',Validators.required],
          image_one :['',Validators.required],
          image_two :['',Validators.required],
          image_three :['',Validators.required],
          session:['',Validators.required]
          
    
        })

     

  }

  ngOnInit() {
    this.getroomType();
  }

    getroomType(){
      this.roomService.getroomType().subscribe(res =>   {

        this.roomTypeList = res;
        this.roomTypeList.forEach((a:any)=> {
          Object.assign(a,{room_type:a.room_type})
        });


       })
    }

    addRoom(record){
      const room : any ={

        
        number: record.room_number,
        room_type: record.room_type,

        floor: record.floor,
        duration: record.duration,
        reserved: record.reserved,
   
        image_one :record.image_one,
   
        image_two :record.image_two,
   
        image_three :record.image_three,
   
        session: record.session
   

      }
      room.image_one= this.base64_string
      room.image_two= this.base64_string
      room.image_three= this.base64_string
      this.roomService.postroom_room(room).subscribe(success=>{this.router.navigate(['/pages/index'])})

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
