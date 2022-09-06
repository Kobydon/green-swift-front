import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service.service';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  createForm!:FormGroup;
  submitted = false;
  base64_string:any;
 
  constructor(private fb:FormBuilder,private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit() {
    this.createForm= this.fb.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        username:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirm_password:['',Validators.required],
        dob:['',Validators.required],
        phone:['',Validators.required],
        department:['',Validators.required],
        designation:['',Validators.required],
        country:['',Validators.required],
        region:['',Validators.required],
        city:['',Validators.required],
        address:['',Validators.required],
        id_upload:['',Validators.required],
        id_type:['',Validators.required],
        id_number:['',Validators.required],
        remark:['',Validators.required],
        date_of_join:['',Validators.required],
        salary:['',Validators.required],
        section:['',Validators.required],
        gender:['',Validators.required],
        photo:['',Validators.required],
    
    })
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
    department:record.department,
    designation:record.designation,
    country:record.country,
    region:record.region,
    city:record.city,
    address:record.address,
    id_upload:record.id_upload,
    id_type:record.id_type,
    id_number:record.id_number,
    remark:record.remark,
    date_of_join:record.date_of_join,
    salary:record.salary,
    section:record.section,
    gender:record.gender,
    photo:record.photo,


  }
  record.photo = this.base64_string;
  record.id_upload = this.base64_string;
  this.employeeService.postemployee(emp).subscribe((success=>{
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
