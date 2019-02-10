import { BookInfo } from './../../../models/Angular/BookInfo';
import { Client } from './../../../models/Angular/Client';
import { BookReportService } from './../book-report.service';
import { ClientReportService } from './../client-report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-app-report',
  templateUrl: './app-report.component.html',
  styleUrls: ['./app-report.component.scss']
})
export class AppReportComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
  billNo;
  clientReports:Client[]=[];
  filteredClientReportBybillNo:Client[]=[];
  client=new Client();
  bookReports:BookInfo[]=[];
  filteredBookReportbybillNo:BookInfo[]=[];

  constructor(private route:ActivatedRoute,
    private clienReportServic:ClientReportService,
    private bookReportService:BookReportService) { 
    

  }

  ngOnInit() {
    this.billNo = this.route.snapshot.paramMap.get('billNo');
    console.log('ng-billNo from app-report',this.billNo); 

    this.clienReportServic.getAllClientReport()
    .subscribe(res => {
      this.clientReports = res; 
      let fcr = (this.billNo) ?
        this.clientReports.filter(p => p.billNo
        .toLowerCase()
        .includes(this.billNo.toLowerCase())) :
         this.clientReports;      
         this.filteredClientReportBybillNo=fcr;
         console.log('filterClients:',this.filteredClientReportBybillNo); 
         for (let i = 0; i < this.filteredClientReportBybillNo.length; i++) {
          this.client = this.filteredClientReportBybillNo[i];
          console.log('find single client',this.client);
           
         }
    }, err => {
      console.log(err);
    });

    this.bookReportService.getAllBookReport()
    .subscribe(res => {
      this.bookReports = res; 
      console.log(this.bookReports);
      let bcr = (this.billNo) ?
      this.bookReports.filter(p => p.billNo
      .toLowerCase()
      .includes(this.billNo.toLowerCase())) :
       this.bookReports;      
       this.filteredBookReportbybillNo=bcr;
       console.log('filteredBooks:',this.filteredBookReportbybillNo);  
    }, err => {
      console.log(err);
    });
  }

  downloadPdf(){
  let doc=new jsPDF();
  let specialElementsHandalers={
    '#editor':function(element,renderer){
      return true;
    }
  };

  let content=this.content.nativeElement;
  doc.fromHTML(content,15,15,{
  'width':150,
 
  'elementHandlers':specialElementsHandalers
  });
  doc.save('report.pdf');
  }
}
