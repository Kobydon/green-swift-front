import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-purchase-request',
  templateUrl: './add-purchase-request.component.html',
  styleUrls: ['./add-purchase-request.component.scss']
})
export class AddPurchaseRequestComponent implements OnInit {

  // set isDisabled(value: boolean) {
  //   this.isDisabled = value;
  //   if(value) {
  //    this.form.controls['name'].disable();
  //   } else {
  //      this.form.controls['name'].enable();
  //    }
  //  }

  constructor() { }

  ngOnInit() {
  }


}
