import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { InventoryLayoutComponent } from './inventory/inventory-layout/inventory-layout.component';
import { EmployeesLayoutComponent } from './pages/employees/employees-layout/employees-layout.component';
import { AddGuestComponent } from './pages/guests/add-guest/add-guest.component';
import { GuestLayoutComponent } from './pages/guests/guest-layout/guest-layout.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { ViewGuestComponent } from './pages/guests/view-guest/view-guest.component';
import { IndexComponent } from './pages/index/index.component';
import { PagesComponent } from './pages/pages.component';
import { PaymentLayoutComponent } from './pages/payments/payment-layout/payment-layout.component';
import { RoomLayoutComponent } from './pages/rooms/room-layout/room-layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SettingsLayoutComponent } from './settings/settings-layout/settings-layout.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home/home-list',
    pathMatch: 'full'
  },




  
  // {s
  //   path:'view-guest',
  //   component:BlankLayoutComponent,
  //   children:[
  //     { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)}
  //   ]
  // },
 
  {
    path: 'rooms',
   component:RoomsComponent,
   
  },

  {
    path: 'dashboard',
    redirectTo: 'pages/index',
    pathMatch: 'full'
   
  },



  {
    path: 'guest/add',
    component: AddGuestComponent,
    
   
  },

  {
    path: 'guest-view',
    component: GuestLayoutComponent,

    children:[
      {path: '', loadChildren: () => import('./pages/guests/guests.module').then(m => m.GuestsModule)}
    ]
    
   
  },

  {
    path:'login-view',
    children:[
      {path: '', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)}
    ]
  },

  {
    path: 'room-view',
    component: RoomLayoutComponent,

    children:[
      {path: '', loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule )}
    ]
    
   
  },

  {
    path:'employee-view',component:EmployeesLayoutComponent,
    children:[
     { path:'',loadChildren:() => import('./pages/employees/employees.module').then(m=>m.EmployeesModule)
    }
   
    ]

  },

  {
    path:'home-view',component:HomeLayoutComponent,
    children:[
     { path:'',loadChildren:() => import('./home/home/home.module').then(m=>m.HomeModule)
    }
   
    ]

  },

  {
    path: 'features-view',
    component:PaymentLayoutComponent ,

    children:[
      {path: '', loadChildren: () => import('./features/features/features.module').then(m => m.FeaturesModule )}
    ]
    
   
  },
  {
    path: 'todo-view',
    component:PaymentLayoutComponent ,

    children:[
      {path: '', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule )}
    ]
    
   
  },
 
  {
    path: 'payment-view',
    component:PaymentLayoutComponent ,

    children:[
      {path: '', loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule )}
    ]
    
   
  },


  {
    path: 'inventory-view',
    component:InventoryLayoutComponent ,

    children:[
      {path: '', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule )}
    ]
     
   
  },

  {
    path: 'guest/view-guest',
    component: ViewGuestComponent,
    
   
  },

  {
    path: 'settings-view',
    component:SettingsLayoutComponent,

    children:[
      {path: '', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule )}
    ]
     
   
  },


  // {
  //   path: '**',
  //   redirectTo: 'pages/index'
  // }
];

export const routing = RouterModule.forRoot(appRoutes);
