import { BookInfo } from './../../../models/Angular/BookInfo';
import { Client } from './../../../models/Angular/Client';
import { BookReportService } from './../book-report.service';
import { ClientReportService } from './../client-report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
  
declare function makePDF():any;

@Component({
  selector: 'app-app-report',
  templateUrl: './app-report.component.html',
  styleUrls: ['./app-report.component.scss']
})
export class AppReportComponent implements OnInit {
  // screen DPI / PDF DPI
 readonly dpiRatio = 96 / 72;
  pdfSrc = './pdf-test.pdf';

  @ViewChild('content') content:ElementRef;
  billNo;
  clientReports:Client[]=[];
  filteredClientReportBybillNo:Client[]=[];
  client=new Client();
  bookReports:BookInfo[]=[];
  filteredBookReportbybillNo:BookInfo[]=[];
 date;
  constructor(private route:ActivatedRoute,
    private clienReportServic:ClientReportService,
    private bookReportService:BookReportService) { 
    

  }

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
 
   this.date= day+'/'+month+'/'+year;

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
  // let doc=new jsPDF();
  // let specialElementsHandalers={
  //   '#content':function(element,renderer){
  //     return true;
  //   }
  // };

  // let content=this.content.nativeElement;
  // doc.fromHTML(content,15,15,{
  // 'width':150,
 
  // 'elementHandlers':specialElementsHandalers
  // });
  // doc.save('report.pdf');

  var data = document.getElementById('contentToConvert');  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
   var pageHeight = 295;    
   var imgHeight = canvas.height * imgWidth / canvas.width;  
   var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    pdf.save('MYPdf.pdf'); // Generated PDF   
  });  
}  
  makepdf(){
    makePDF();
  }

}


