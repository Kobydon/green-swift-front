import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomLayoutComponent } from './room-layout/room-layout.component';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from '../../shared/shared.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomsStatusComponent } from './rooms-status/rooms-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomReserveComponent } from './room-reserve/room-reserve.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { GroupReservationComponent } from './group-reservation/group-reservation.component';

@NgModule({
  declarations: [RoomLayoutComponent,
          // RoomsComponent,
          // AddRoomComponent,
          // RoomsStatusComponent,
          // RoomReserveComponent,
          // RoomTypeComponent
  
  
  
  ],
  imports: [
    
    RoomsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ]
})
export class RoomsModule { }
