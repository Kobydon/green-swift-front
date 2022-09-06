import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentLayoutComponent } from './payment-layout/payment-layout.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    // AddPaymentsComponent,
     EditPaymentsComponent, 
    //  PaymentListComponent, 
     PaymentLayoutComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
