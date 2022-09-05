import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { StoreTransferComponent } from './store-transfer/store-transfer.component';
import { PurchaseRequestComponent } from './purchase-request/purchase-request.component';
import { AccountPayableComponent } from './account-payable/account-payable.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { AccountGeneralLedgerComponent } from './account-general-ledger/account-general-ledger.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReceiveOrderComponent } from './receive-order/receive-order.component';
import { AddPurchaseRequestComponent } from './add-purchase-request/add-purchase-request.component';
const routes: Routes = [
  {
    path: 'inventory',
    component:InventoryLayoutComponent,
 
    children: [
 
        {
          path:'store-tansfer',
          component:StoreTransferComponent
        },
        {
          path:'purchase-request',
          component: PurchaseRequestComponent
        },

        {
          path:'account-receivable',
          component:AccountReceivableComponent
        },

        {
          path:'account-payable',
          component:AccountPayableComponent
        },

        {
          path:'account-general',
          component:AccountGeneralLedgerComponent
        },

        {
          path:'stock-usage',
          component:AccountGeneralLedgerComponent
        },

        {
          path:'purchase-order',
          component:PurchaseOrderComponent
        },
        {
          path:'add-purchase-request',
          component:AddPurchaseRequestComponent
        },

        {
          path:'receive-order',
          component:ReceiveOrderComponent
        },

        {
          path:'return-request',
          component:ReceiveOrderComponent
        },
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
