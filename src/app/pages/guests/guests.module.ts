import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsRoutingModule } from './guests-routing.module';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';

import { SharedModule } from '../../shared/shared.module';
import { GuestsComponent } from './guests.component';
import { AddGuestComponent } from './add-guest/add-guest.component';


@NgModule({
  declarations: [
    GuestLayoutComponent,
  
   


  ],
  imports: [
    CommonModule,
    GuestsRoutingModule,
     SharedModule,
  
  ]
})
export class GuestsModule { }
