import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room-service.service'
import { EmployeeService } from '../../services/employee-service.service';
import { FormGroup,FormBuilder, Validators,FormControl} from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { TouchSequence } from 'selenium-webdriver';
import { chkValue } from '../../chk';
//import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-house-keeping-list',
  templateUrl: './house-keeping-list.component.html',
  styleUrls: ['./house-keeping-list.component.scss']
})
export class HouseKeepingListComponent implements OnInit {
  roomList:any;
  employeeList:any;
createForm:FormGroup;
createUpdateForm :FormGroup;
submitted=false;
taskList:any;
find= false
checked:any;

public to_list: any=[];
public product:any=[];
checking: boolean = false;
public value :any
public some:any


public totalItem : number = 0;
  constructor(private roomService:RoomService,private router:Router,
    private employeeService:EmployeeService,private fb:FormBuilder,private cartService:CartService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.getRooms();
    this.getEmployees();
    this.getTask();
    this.cartService.getProducts().subscribe((res)=>{

      this.totalItem = res.length;
      this.product = res;
      
    })

    this.createForm= this.fb.group({
      task_name:['',Validators.required]
    });
    this.createUpdateForm = this.fb.group({
      status_r:['',Validators.required],
      room_number:['',Validators.required],
      room_type: ['',Validators.required],


      occupancy_state:['',Validators.required],

      maintanace_state:['',Validators.required],
      assignee:['',Validators.required],
      task_get:['',Validators.required],
      
      

    });

  }

  addTask(record){
    this.submitted=true;
     const task_to_add :any={
              task_name: record.task_name
      }
      this.roomService.postTask(task_to_add).subscribe((success=>{
        this.router.navigate(['/pages/house-keeping'])
      }))
  }

  getTask(){

    this.roomService.getTask().subscribe((res:any)=>{
  
      this.taskList = res;
      this.taskList.forEach((a:any) =>{
     Object.assign(a,{name:a.name})
  
  
      })
  
  
  
    })
  }

  UpdateHouse(record:any){
   
   
   this.submitted = true;
    // const id = this.route.snapshot k.paramMap.get('id')
   let sum = "";
    for(let i:number =0;i<this.product.length; i++){
      
      this.to_list= this.product;
      this.product[i].status = record.status_r
      this.product[i].assignee = record.assignee
      this.product[i].task =record.task_get
      this.product[i].occupancy_state= record.occupancy_state
      this.product[i].maintanace_state= record.maintanace_state
     // sum+= this.product[i].status
      // console.log(this.product[i].status);
    }

   //   this.product.value.status= this.chk;
    // if(id){

    //  const tsk:any ={
  
    //   room_number:record.room_number,
    //   room_type:record.room_type,
    //   status:record.status,
    //   occupancy_state:record.occupancy_state,
    //   maintanace_state:record.maintanace_state,
    //   assignee:record.assignee,lc
    //  }
    console.log(record.status_r)
     this.roomService.updateHouse(this.product).subscribe(success=> {
      this.cartService.removeAllCart();
 
   });	
  
}

  switchClicked(event,item){
   let confirm :any = event.srcElement.checked
 
  this.checked = confirm
    
  //  this.value=   this.cartService.addtoCart(item);
  //  let checkData = localStorage.getItem("checkData");
    if(this.checked!=null && this.checked ==true){
      this.cartService.addtoCart(item);
      console.log(item);
    }
 
 else{
  this.cartService.removeCartItem(item)
 // this.cartService.getProducts();

    


 }

     
    // }

    //   else {
    //     console.log(event);
    //   }
    
  }


  addtocart(item){
  
  
    this.cartService.addtoCart(item);

  }
getRooms(){

  this.roomService.getrooms().subscribe((res:any)=>{

    this.roomList = res;
    this.roomList.forEach((a:any) =>{
   Object.assign(a,{room_numer:a.room_number,status:a.status,room_type:a.room_type,
        reserved:a.reserved,floor:a.floor,occupancy_state:a.occupancy_state,maintanance:a.maintanace_state,
      assignee:a.assignee, task:a.task})


    })



  })
}


getEmployees(){
this.employeeService.getemployees().subscribe((res:any)=>{
     this.employeeList = res;
      this.employeeList.forEach((a:any)=>{
      Object.assign(a,{firstname:a.first_name,lastname:a.last_name,gender:a.gender,phone:a.phone,
        session:a.session,
      address:a.address,salary:a.salary,empoyee_date:a.created_date})
    })


  
})
}
}