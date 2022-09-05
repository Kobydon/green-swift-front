import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  template: `
  <div>


    <router-outlet></router-outlet>
    </div>`,

  
    animations: [
      trigger('routeAnim', [
        transition('* <=> *', [    
          query(':enter, :leave', style({ position: 'fixed', width:'100%' })),


          group([ 
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
          ])
        ])
      ])
     ],
  })
export class AppComponent {
  title = 'app';

  isUserLoggedIn = false;
  checking = false;
  
    ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else


         this.isUserLoggedIn = false;

         let checkData = localStorage.getItem("checking");
      console.log("checkData: " + checkData);

      if( checkData != null && checkData == "true")
         this.checking = true;
      else


         this.checking = false;
   }
   prepareRoute(outlet:RouterOutlet){
    return outlet.activatedRoute.snapshot.url
  }
}
