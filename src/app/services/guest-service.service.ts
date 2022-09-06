import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { guest } from '../guest';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class GuestService {

  private guestUrl = 'http://127.0.0.1:5000';  // URL to REST API

  constructor(private http: HttpClient,private router:Router) { }

  /** GET guests from the server */
  getroomType(): Observable<any[]> {
    return this.http.get<any[]>(this.guestUrl + '/room/get_room_type');
  }

getrooms():Observable<any[]>{
   return this.http.get<any[]>(this.guestUrl + '/room/get_room');
}

getGuests():Observable<any[]>{
  return this.http.get<any[]>(this.guestUrl + '/guest/get_all_guest');
}

getmaleGuests(): Observable<any[]>{

    return  this.http.get<any[]>(this.guestUrl + '/guest/get_male_guest')

}  

getfemaleGuest(): Observable<any[]>{

  return  this.http.get<any[]>(this.guestUrl + '/guest/get_female_guest')

} 


getcheckOut(): Observable<any[]>{

  return  this.http.get<any[]>(this.guestUrl + '/guest/checkout_today')

} 

  /** GET guest by id. Will 404 if id not found */
  getEmployee(id: any): Observable<any> {
    const url = `${this.guestUrl}/guests/${id}`;
    return this.http.get<any>(url);
  }

  getGuest_info(id: number): Observable<any> {
    const url = `${this.guestUrl}/guest/guest_info/${id}`;
    return this.http.get<any>(url);
  }
  
  
  /** POST: add a new guest to the server */
 
  getGuest(id: number): Observable<any> {
    const url = `${this.guestUrl}/guest/get_guest/${id}`;
    return this.http.get<any[]>(url);


   
  }




  addGuest(guest:any) {
    //console.log(guest);
      return this.http.post(this.guestUrl + '/guest/add_guest', guest, httpOptions);
    }

    getTask():Observable<any[]>{
      return this.http.get<any[]>(this.guestUrl + '/room/get_task');
    }
     

  postroom_type(ad:any) {
    //console.log(guest);
      return this.http.post(this.guestUrl + '/room/add_room_type', ad, httpOptions);
    }

 
    postroom_room(ad:any) {
      //console.log(guest);
        return this.http.post(this.guestUrl + '/room/add_room', ad, httpOptions);
      }
  /** PUT: update the guest on the server */
  updateHouse(house: any) {
    return this.http.put(this.guestUrl + '/room/update_house', house, httpOptions)
  }

  updateGuest(guest: any): Observable<any> {
    return this.http.put(this.guestUrl + '/guest/update_guest', guest, httpOptions)
  }
  
  /** DELETE: delete the guest from the server */
  /** DELETE: delete the guest from the server */
  deleteGuest(id:number) {
	  if (confirm("Are you sure to delete?")) {
		// const id = typeof ad === 'number' ? ad : ad.id;
		const url = `${this.guestUrl}/guest/delete_guest/${id}/`;
		return this.http.delete(url, httpOptions)
	  }
	  return of({});
  }
  
  checkout(guest: any): Observable<any> {
    return this.http.put(this.guestUrl + '/guest/checkout', guest, httpOptions)
  }
}