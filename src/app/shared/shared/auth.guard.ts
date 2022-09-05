import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userService } from '../../services/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // user!:Login

  constructor(private auth: userService,private router:Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
       let url: string = state.url;
 
           return this.checkLogin(url);
       }
 
       checkLogin(url: string): true | UrlTree {
          console.log("Url: " + url)
          const val = localStorage.getItem('isUserLoggedIn');
 
          if(val != null && val == "true"){
             if(url == "/login")
                this.router.parseUrl('pages/index');
             else 
                return true;
          } 

             return this.router.parseUrl('account/login');
       
          
       }

      }
    