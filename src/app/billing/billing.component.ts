import { ClientReportService } from './../client-report.service';
import { BookReportService } from './../book-report.service';

import { BookInfoService } from './../book-info.service';
import { BookInfo } from './../../../models/Angular/BookInfo';
import { Client } from './../../../models/Angular/Client';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  clients:Client[]=[];
  client=new Client();
  filteredClients:Client[]=[];

  books:BookInfo[]=[];
  filteredBooks:BookInfo[]=[];

  newBookList:BookInfo[]=[];
  total:number;
  clientReports:Client[]=[];
  billNo;

  constructor(private clientService:ClientService,
    private bookInfoService:BookInfoService,
    private bookReportService:BookReportService,
    private clientReportService:ClientReportService,
    private router:Router) { 
    
    }

  ngOnInit() {
    this.bookInfoService.getAllBookInfo()
    .subscribe(res => {
      this.books = res; 
    }, err => {
      console.log(err);
    });

    this.clientService.getAllClient()
    .subscribe(res => {
      this.clients = res; 
     
    }, err => {
    
    });
  }

  addList(book){

  this.newBookList.push(book);
  

  }

  updateBookList(book){
  
    this.newBookList.map((todo, i) => {    
      if (todo.id == book.id){
         this.newBookList[i].discount=book.discount;

         const sTotal=(this.newBookList[i].basePrice*book.discount);
         const dDiscount=(sTotal/100);

         this.newBookList[i].subTotal=this.newBookList[i].basePrice-dDiscount;
       }
      
     
     });
    
     this.total = this.newBookList.filter((item) =>item.subTotal)
                            .map((item) => +item.subTotal)
                            .reduce((sum, current) => sum + current);
        
  }

  filterClients(query: string) { 
       
     
      let filterClents = (query) ?
        this.clients.filter(p => p.name
        .toLowerCase()
        .includes(query.toLowerCase())) :
         this.clients;      
         this.filteredClients=filterClents;
                
   
   }
 selectClient(clientId){
  if (clientId) this.clientService.getClient(clientId)
  .subscribe(p => this.client = p);

}

   filterBooks(query: string) { 
      
      let filteredBooks = (query) ?
        this.books.filter(p => p.name
        .toLowerCase()
        .includes(query.toLowerCase())) :
         this.books;      
         this.filteredBooks=filteredBooks;
                
   }

   calculationWithPackinCoastAndCommision(clientInfo){
    this.client=clientInfo;
    
   const packhingCost=this.client.packingCoast;
   const total=this.total;

    this.client.total=( +total + +packhingCost);
  
    this.client.totalWithComiAndPackingCost=(this.client.total-this.client.commision);
  
    
   }
   calculationWitPreviousDue(clientInfo){
    this.client=clientInfo;
    this.client.totalWithPreviousDue=(this.client.totalWithComiAndPackingCost+this.client.dueAmount);
   }
   calculateCurrentdue(client){
    this.client=client;
    if(this.client.totalWithPreviousDue>0){
      this.client.currentDue=(this.client.totalWithPreviousDue-this.client.paidAmount);
    }
    else{
      this.client.currentDue=( +this.client.totalWithPreviousDue + +this.client.paidAmount);
    }
   
  
   }


   saveReport(client,newBookList){

  
    this.clientReportService.getAllClientReport()
    .subscribe(data=>{
     this.clientReports=data;
      

     client.billNo='bill-00'+this.clientReports.length;
     this.clientReportService.insertClientReport(client).subscribe(data=>{
       
     })

     newBookList.forEach(element => {
       element.billNo='bill-00'+this.clientReports.length;
       this.bookReportService.insertBookReport(element).subscribe(data=>{
         
       })
     });
    
    this.billNo=client.billNo;

    }) 
   
  
  }
}
