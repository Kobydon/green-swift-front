import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { StoreTransferComponent } from './store-transfer/store-transfer.component';
import { StoreUsagesComponent } from './store-usages/store-usages.component';
import { StoreSettlementsComponent } from './store-settlements/store-settlements.component';
import { AddSettlementsComponent } from './add-settlements/add-settlements.component';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { PurchaseRequestComponent } from './purchase-request/purchase-request.component';
import { SharedModule } from '../shared/shared.module';
import { AddPurchaseRequestComponent } from './add-purchase-request/add-purchase-request.component';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { AccountPayableComponent } from './account-payable/account-payable.component';
import { AccountGeneralLedgerComponent } from './account-general-ledger/account-general-ledger.component';
import { AccountReportsComponent } from './account-reports/account-reports.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { StockUsageComponent } from './stock-usage/stock-usage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReceiveOrderComponent } from './receive-order/receive-order.component';
import { ReturnRequestComponent } from './return-request/return-request.component';
import { AddReturnRequestComponent } from './add-return-request/add-return-request.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';


@NgModule({
  declarations: [StoreTransferComponent, 
    StoreUsagesComponent,
     StoreSettlementsComponent, 
     AddSettlementsComponent,
      InventoryLayoutComponent,
      PurchaseRequestComponent,
      AddPurchaseRequestComponent,
      AccountReceivableComponent,
      AccountPayableComponent,
      AccountGeneralLedgerComponent,
      AccountReportsComponent,
      AccountSettingsComponent,
      StockUsageComponent,
      PurchaseOrderComponent,
      ReceiveOrderComponent,
      ReturnRequestComponent,
      AddReturnRequestComponent,
      AddPurchaseOrderComponent
    ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    BrowserAnimationsModule
    ,
  ]
})
export class InventoryModule { }
