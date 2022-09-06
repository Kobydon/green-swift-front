import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../services/payment-service.service';
import {  ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
paymentList:any;
payList:any;
  constructor(private paymentService:PaymentService,private route :ActivatedRoute) { }

  ngOnInit() {
    this.getPayment();
  }
getPayment(){
  this.paymentService.getPayment().subscribe(res =>{
    this.paymentList = res
    this.paymentList.forEach((a:any)=>{

      Object.assign(a,{amount:a.amount,discount:a.discount,name:a.name,method:a.method,room:a.room,
        address:a.address
     })
    })
  })
}

find(id:number){
 
    this.paymentService.get_payment_for(id).subscribe(res=>{
      this.payList = res;
      this.payList.forEach((a:any)=>{
        Object.assign(a,{amount:a.amount,discount:a.discount,name:a.name,method:a.method,room:a.room,
          status:a.status,payment_date:a.payment_date,duration:a.duration,checkin_date:a.check_date,
          checkout_date:a.checkout_date
        })
      })

    })
  

}


@ViewChild('pdfTable') pdfTable: ElementRef;
// ...
//PDF genrate button click function
public downloadAsPDF() {
  const doc = new jsPDF();
  //get table html
  const pdfTable = this.pdfTable.nativeElement;
  //html to pdf format
  var html = htmlToPdfmake(pdfTable.innerHTML);
 
  const documentDefinition = { content: html };
  pdfMake.createPdf(documentDefinition).open()
  

}

}