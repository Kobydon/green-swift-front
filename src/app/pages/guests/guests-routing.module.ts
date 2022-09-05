import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { GuestsComponent } from './guests.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';

const routes: Routes = [
  
    //v {path:'',component:GuestLayoutComponent}
    {
      path: 'guest',
      component:GuestLayoutComponent,
   
      children: [
   
          // {
          //   path:'guest-list',
          //   component:GuestsComponent
          // },

          // {path: 'view-details',
          // component:ViewGuestComponent
        
          
          // },

          // {path: 'add-guest',
          // component:AddGuestComponent
        
          
          // }
        
        
      ]
  }
];
   


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }
