import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/services/login.service';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { userService } from '../../services/user-service.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  createForm!:FormGroup;  
  submitted = false;
  loading = false;
  id?:string|null;
  isUserLoggedIn = false;
  constructor(private fb:FormBuilder,private route:ActivatedRoute, private router:Router,
    private location:Location,private userService:userService,private toastr:ToastrService) {

    this.createForm = this.fb.group({

      username:['',Validators.required],
      password:['',Validators.required]
      // condition:['',Validators.required],
      // phone:['',Validators.required],
      // price:['',Validators.required],
      // description:['',Validators.required],
      // city:['',Validators.required],
      // negotiable:['',Validators.required],
      // image:['',Validators.required]
      

    })



   }

  ngOnInit() {
  }




  loginUser(){
    this.submitted= true;
   
   

    if(this.createForm.invalid){
      return;
    }

      
    

    const user:any ={
     
      username:this.createForm.value.username,
      password:this.createForm.value.password,
      condition:this.createForm.value.condition,
     
      // phone:this.createForm.value.phone,
      // price:this.createForm.value.price,
      // description:this.createForm.value.description,
      // city:this.createForm.value.city,
      // negotiable:this.createForm.value.negotiable,
      // image:this.createForm.value.image,
      
      
    }
    //this.loading=true;
    // ad.image= this.base64_string
    try{
    this.userService.loginUser(user,user.username,user.password)
    
  }
  catch(error){
    this.toastr.error(null, error);
  }



  }
 



}
