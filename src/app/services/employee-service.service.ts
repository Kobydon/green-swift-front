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

  private clientUrl= 'https://green-swift-api.herokuapp.com';  // URL to REST API

  constructor(private http: HttpClient,private router:Router) { }

  /** GET users from the server */
  getroomType(): Observable<any[]> {
    return this.http.get<any[]>(this.clientUrl+ '/room/get_room_types');
  }

  getInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.clientUrl+ '/client/get_info');
  }

getUserInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.clientUrl+ '/client/get_user_info');
  }
getemployees():Observable<any[]>{
   return this.http.get<any[]>(this.clientUrl+ '/employee/get_employees');
}


getclients():Observable<any[]>{
  return this.http.get<any[]>(this.clientUrl+ '/client/get_clients');
}


getroom_number():Observable<any[]>{
  return this.http.get<any[]>(this.clientUrl+ '/room/get_room_numbers');
}

  
  /** GET user by id. Will 404 if id not found */
  getEmployee(id: number): Observable<any> {
    const url = `${this.clientUrl}/users/${id}`;
    return this.http.get<any>(url);
  }
  
  /** POST: add a new user to the server */
 
  postroom_type(ad:any) {
    //console.log(user);
      return this.http.post(this.clientUrl+ '/room/add_room_type', ad, httpOptions);
    }

 
    postclient(ad:any) {
      //console.log(user);
        return this.http.post(this.clientUrl+ '/client/add', ad, httpOptions);
      }
  /** PUT: update the user on the server */
  updateEmployee(user: any): Observable<any> {
    return this.http.put(this.clientUrl+ '/update', user, httpOptions);
  }
  
  /** DELETE: delete the user from the server */
  deleteEmployee(user: any | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof user === 'number' ? user : user.id;
		const url = `${this.clientUrl}/delete/${id}`;
		return this.http.delete(url, httpOptions);
	  }
	  return of({});
  }
  
}