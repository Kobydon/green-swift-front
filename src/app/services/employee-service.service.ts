import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { User } from '../user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private employeeUrl = 'http://127.0.0.1:5000';  // URL to REST API

  constructor(private http: HttpClient,private router:Router) { }

  /** GET users from the server */
  getroomType(): Observable<any[]> {
    return this.http.get<any[]>(this.employeeUrl + '/room/get_room_type');
  }

getemployees():Observable<any[]>{
   return this.http.get<any[]>(this.employeeUrl + '/employee/get_employees');
}

getroom_number():Observable<any[]>{
  return this.http.get<any[]>(this.employeeUrl + '/room/get_room_number');
}

  
  /** GET user by id. Will 404 if id not found */
  getEmployee(id: number): Observable<any> {
    const url = `${this.employeeUrl}/users/${id}`;
    return this.http.get<any>(url);
  }
  
  /** POST: add a new user to the server */
 
  postroom_type(ad:any) {
    //console.log(user);
      return this.http.post(this.employeeUrl + '/room/add_room_type', ad, httpOptions);
    }

 
    postemployee(ad:any) {
      //console.log(user);
        return this.http.post(this.employeeUrl + '/employee/add', ad, httpOptions);
      }
  /** PUT: update the user on the server */
  updateEmployee(user: any): Observable<any> {
    return this.http.put(this.employeeUrl + '/update', user, httpOptions);
  }
  
  /** DELETE: delete the user from the server */
  deleteEmployee(user: any | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof user === 'number' ? user : user.id;
		const url = `${this.employeeUrl}/delete/${id}`;
		return this.http.delete(url, httpOptions);
	  }
	  return of({});
  }
  
}