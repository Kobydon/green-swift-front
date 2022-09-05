import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { PaymentLayoutComponent } from './payment-layout/payment-layout.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

const routes: Routes = [


{
 path:'payments',component:PaymentLayoutComponent,
 children:[
  //  {
  //    path:"payment-list",component:PaymentListComponent
  //  },

  //  {
  //   path:"add-payment",component:AddPaymentsComponent
  // },
   {
    path:"edit-payment",component:EditPaymentsComponent
  },


 ]

}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
