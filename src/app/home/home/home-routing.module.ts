import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { HomeComponent } from './home.component';

const routes: Routes = [

  
  {
    path: 'home',
    component:HomeLayoutComponent,
 
    children: [
 
        {
          path:'home-list',
          component:HomeComponent
        }
        // {
        //   path:'add-room',
        //   component:AddRoomComponent
        // },
        // {
        //   path:'room-status',
        //   component:RoomsStatusComponent 
        // }
      ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
