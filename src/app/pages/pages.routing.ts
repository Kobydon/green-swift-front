import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { AddPaymentsComponent } from './payments/add-payments/add-payments.component';
import { GuestsComponent } from './guests/guests.component';
import { AddGuestComponent } from './guests/add-guest/add-guest.component';
import { ViewGuestComponent } from './guests/view-guest/view-guest.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { RoomsStatusComponent } from './rooms/rooms-status/rooms-status.component';
import { RoomReserveComponent } from './rooms/room-reserve/room-reserve.component';
import { RoomTypeComponent } from './rooms/room-type/room-type.component';
import { GroupReservationComponent } from './rooms/group-reservation/group-reservation.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { HouseKeepingListComponent } from './house-keeping-list/house-keeping-list.component';
import { AuthGuard } from '../shared/shared/auth.guard';

export const childRoutes: Routes = [
    
{
        path: 'pages',
        component: PagesComponent,canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
            {
                path:'employee-list',
                component:EmployeesListComponent
              },


               {
          path:'add-employee',
          component:AddEmployeesComponent
        },
        {
            path:"payment-list",component:PaymentListComponent
          },
       
          {
           path:"add-payment",component:AddPaymentsComponent
         },

         {
            path:'guest-list',
            component:GuestsComponent
          },
          {
            path: 'login',
            component: LoginComponent,
        },

          {path: 'add-guest',
          component:AddGuestComponent
        
          
          },
          {path: 'view-details/:id',
          component:ViewGuestComponent
        
          },

          {
            path:'room-list',
            component:RoomsComponent
          },
          {
            path:'add-room',
            component:AddRoomComponent
          },
          {
            path:'room-status',
            component:RoomsStatusComponent 
          },
          {
            path:'room-reserve',
            component:RoomReserveComponent 
          },
          {
            path:'add-room-type',
            component:RoomTypeComponent 
          },
          {
            path:'group-reserve',
            component:GroupReservationComponent 
          },
         {
            path:'todo-list',
            component:TodoListComponent
          },
          {
            path:'add-todo',
            component:AddTodoComponent
          } ,
          {
            path:'house-keeping',
            component:HouseKeepingListComponent
          } ,
          {
               path:'edit-guest/:id',
            component:AddGuestComponent
          } 

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
