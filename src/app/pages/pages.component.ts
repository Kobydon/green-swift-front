import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
  // ...
} from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']



  // animation triggers go here
 
  
})



export class PagesComponent {

//   prepareRoute(outlet:RouterOutlet){
//     return outlet.activatedRoute.snapshot.url
//  }

constructor(private router :Router){}
isCardNeeded = true ;

}