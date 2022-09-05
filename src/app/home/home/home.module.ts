import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent,
    HomeLayoutComponent
  
  
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
   
  ]
})
export class HomeModule { }
