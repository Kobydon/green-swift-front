import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService
 } from '../../services/employee-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  createForm!:FormGroup;
  submitted = false;
  base64_string:any;
  constructor(private fb:FormBuilder,private EmplyeeServicce
    :EmployeeService
    ,private router:Router) {
    this.createForm= this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      dob:['',Validators.required],
      phone:['',Validators.required],
      account_number:['',Validators.required],
      transaction_pin:['',Validators.required],
      country:['',Validators.required],
      region:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required],
      balance:['',Validators.required],
      account_status:['',Validators.required],
      gender:['',Validators.required],
      photo:['',Validators.required],
  
  })
   }

  ngOnInit() {
  }


  
addEmployee(record){
  this.submitted =true;
  const emp :any ={

    firstname:record.firstname,
    lastname:record.lastname,
    username:record.username,
    email:record.email,
    password:record.password,
    confirm_password:record.confirm_password,
    dob:record.dob,
    phone:record.phone,
    country:record.country,
    region:record.region,
    city:record.city,
    address:record.address,
    account_number:record.account_number,
    transaction_pin:record.transaction_pin,
    balance:record.balance,
    account_status:record.account_status,
    gender:record.gender,
    photo:record.photo,


  }
  record.photo = this.base64_string;
  record.id_upload = this.base64_string;
  this.EmplyeeServicce
  .postclient(emp).subscribe((success=>{
     this.router.navigate(['/pages/index'])
   }))
}

handleUpload(event:any){
  const file = event.target.files[0];
  const reader = new FileReader()
  reader.readAsDataURL(file);
  reader.onload =()=>{

    this.base64_string =reader.result;
  }

}
}
