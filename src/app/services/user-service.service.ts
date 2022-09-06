import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {shareReplay } from 'rxjs/operators'



import * as moment from 'moment';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class userService {

  private userUrl = 'http://127.0.0.1:5000';  // URL to REST API
   
 
  isUserLoggedIn: boolean = false;
  redirectUrl?: string;

  constructor(private http: HttpClient,private router:Router) { }

  // /** GET users from the server */
  // getAds(): Observable<Ads[]> {
    
  //   return this.http.get<Ads[]>(this.userUrl + '/ads_by_user/');
  // }
  
  // /** GET user by id. Will 404 if id not found */
  // getAdds(id: number): Observable<any> {
  //   const url = `${this.userUrl}/ads_to_get/${id}`;
  //   return this.http.get<Ads>(url).pipe(map((res:any)=>{

  //     return res;

  //    }))


   
  // }
  
  /** POST: add a new user to the server */
  loginUser(user,password:any,username:any) {
   
    this.isUserLoggedIn = username == user.username && password == user.password;
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
     
    
    this.http.post(this.userUrl + '/user/get_signin_client', user, httpOptions)
    .subscribe(res => {
      this.setSession(res)
       this.router.navigate(['/pages/index'])
    }
    
      ).add(shareReplay())


    
      
      
  



      
      }

	//console.log(user);
  logout() {
    this.isUserLoggedIn = false;
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  
    localStorage.removeItem('isUserLoggedIn');
    return this.router.navigate(['/account/login']) 
  }
public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

// isLoggedOut() {
//     return !this.isLoggedIn();
// }

private setSession(authResult:any) {
  const expiresAt = moment().add(authResult.expiresIn,'second');

   localStorage.setItem("id_token",(<any>authResult).id_token)
   let data =    localStorage.getItem("id_token");
   if (data ){
    localStorage.setItem('isUserLoggedIn','true');
  
   }

}

getExpiration() {
    const expiration :any = localStorage.getItem("expires_at");
    const expiresAt  = JSON.parse(expiration);
    return moment(expiresAt);
}    


  // postcart(cart:any) {
  //   //console.log(user);
  //     return this.http.post(this.userUrl + '/cart', cart, httpOptions);
  //   }
  
  // /** PUT: update the user on the server */
  // // updateAd(ad:any) :observable<any>  {
  // //   return this.http.put(this.userUrl + '/update_ad_by_user/', ad, httpOptions);
  // // }
  //  /** PUT: update the user on the server */
  //  updateAd(ad: any): Observable<any> {
  //   return this.http.put(this.userUrl + '/update_ad_by_user', ad, httpOptions);
  // }


  
  
  // /** DELETE: delete the user from the server */
  // deleteAds(id:number) {
	//   if (confirm("Are you sure to delete?")) {
	// 	// const id = typeof ad === 'number' ? ad : ad.id;
	// 	const url = `${this.userUrl}/delete_add/${id}/`;
	// 	return this.http.delete(url, httpOptions)
	//   }
	//   return of({});
  // }
  
}