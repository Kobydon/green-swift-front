import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomLayoutComponent } from './room-layout/room-layout.component';
import { RoomsComponent } from './rooms.component';
import { RoomsStatusComponent } from './rooms-status/rooms-status.component';
import { RoomReserveComponent } from './room-reserve/room-reserve.component';
import { RoomTypeComponent } from './room-type/room-type.component';

const routes: Routes = [


  {
    path: 'room',
    component:RoomLayoutComponent,
 
    children: [
 
        // {
        //   path:'room-list',
        //   component:RoomsComponent
        // },
        // {
        //   path:'add-room',
        //   component:AddRoomComponent
        // },
        // {
        //   path:'room-status',
        //   component:RoomsStatusComponent 
        // },
        // {
        //   path:'room-reserve',
        //   component:RoomReserveComponent 
        // },
        // {
        //   path:'add-room-type',
        //   component:RoomTypeComponent 
        // }
      ]

    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
