import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFamiliesComponent } from './account-families/account-families.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
const routes: Routes = [

  {
    path:'settings',component:SettingsLayoutComponent,
    children: [
 
      {
        path:'account-families',
        component:AccountFamiliesComponent
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
export class SettingsRoutingModule { }
