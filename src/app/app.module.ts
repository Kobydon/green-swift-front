import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestsModule } from './pages/guests/guests.module';
import { RoomsModule } from './pages/rooms/rooms.module';
import { PaymentsModule } from './pages/payments/payments.module';
import { TodoModule } from './pages/todo/todo.module';
import { EmployeesModule } from './pages/employees/employees.module';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { HomeModule } from './home/home/home.module';
import { FeaturesLayoutComponent } from './features/features-layout/features-layout.component';
import { FeaturesModule } from './features/features/features.module';
import { InventoryModule } from './inventory/inventory.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsModule } from './settings/settings.module';
import { LoginPageModule } from './login-page/login-page.module';
import { userService } from './services/user-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { EditGuestComponent } from './guest/edit-guest/edit-guest.component';
// import { SettingsLayoutComponent } from './settings/settings-layout/settings-layout.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    GuestsModule,
    RoomsModule,
    PaymentsModule,
    TodoModule,
    EmployeesModule,
    HomeModule,
  FeaturesModule,
    InventoryModule,
    SettingsModule,
    LoginPageModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,

    }),
    routing,
 
  ],

  providers: [
    userService,
 

  
      
   {
     
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
   }
 ],
  declarations: [
    AppComponent,
    SettingsComponent,

  

  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
