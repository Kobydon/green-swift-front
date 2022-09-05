import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { AccountFamiliesComponent } from './account-families/account-families.component';


@NgModule({
  declarations: [
 SettingsLayoutComponent,
 AccountFamiliesComponent,
 SettingsLayoutComponent
   
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
   

  ]
})
export class SettingsModule { }
