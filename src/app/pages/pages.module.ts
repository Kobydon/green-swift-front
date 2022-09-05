import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';


/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
// import { GuestsComponent } from './guests/guests.component';
import { AddGuestComponent } from './guests/add-guest/add-guest.component';
import { ViewGuestComponent } from './guests/view-guest/view-guest.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { AddPaymentsComponent } from './payments/add-payments/add-payments.component';
import { GuestsComponent } from './guests/guests.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { RoomsStatusComponent } from './rooms/rooms-status/rooms-status.component';
import { RoomReserveComponent } from './rooms/room-reserve/room-reserve.component';
import { RoomTypeComponent } from './rooms/room-type/room-type.component';
import { GroupReservationComponent } from './rooms/group-reservation/group-reservation.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { HouseKeepingListComponent } from './house-keeping-list/house-keeping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditGuestComponent } from '../guest/edit-guest/edit-guest.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { GuestLayoutComponent } from './guests/guest-layout/guest-layout.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
 
        FormsModule,
       
        ReactiveFormsModule,
        BrowserAnimationsModule,
       
        routing
    ],
    declarations: [
        PagesComponent,
     
      TodoListComponent,AddTodoComponent,EditTodoComponent,
        EmployeesListComponent,
        PaymentListComponent,
        AddPaymentsComponent,
        AddGuestComponent,
        GuestsComponent,
        ViewGuestComponent,
        RoomsComponent,
        AddRoomComponent,
        RoomsStatusComponent,
        RoomReserveComponent,
        RoomTypeComponent,
        GroupReservationComponent,
        HouseKeepingListComponent,
        EditGuestComponent,
        SendMoneyComponent,
        WithdrawMoneyComponent,
        NewUserComponent,
        UsersComponent

    ]
})
export class PagesModule { }
