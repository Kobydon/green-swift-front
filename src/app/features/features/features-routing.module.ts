import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesLayoutComponent } from '../features-layout/features-layout.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [


   
  {
    path: 'features',
    component:FeaturesLayoutComponent,
 
    children: [
 
        {
          path:'feature-list',
          component:FeaturesComponent
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
export class FeaturesRoutingModule { }
