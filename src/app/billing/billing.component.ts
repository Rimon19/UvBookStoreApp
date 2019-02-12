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
  
  clnt=new Client();
  filteredClients:Client[]=[];

  books:BookInfo[]=[];
  filteredBooks:BookInfo[]=[];

  newBookList:BookInfo[]=[];
  total:number;
  clientReports:Client[]=[];
  billNo;
  reportLenth:number;

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
      console.log('ng oninitBooks',this.books);
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

  filterClients(clientSearch: string) { 
       
  
      let filterClents = (clientSearch) ?
        this.clients.filter(p => p.name
        .toLowerCase()
        .includes(clientSearch.toLowerCase())) :
         this.clients;      
         this.filteredClients=filterClents;        
   
   }
 selectClient(clientId){
  console.log(clientId);
  let filterClents = (clientId) ?
  this.clients.filter(p => p.id==clientId) :
   this.clients;      
   this.filteredClients=filterClents;  
   this.filteredClients .forEach(element => {
     this.clnt=element;
     
   });

   
  //  if (clientId) this.clientService.getClient(clientId)
  // .subscribe(p => {
  //   this.client= p;
  //   console.log(this.client);
  // });

}

   filterBooks(bookSearch: string) { 
     console.log(bookSearch);
     console.log(this.books);
    if (bookSearch && bookSearch.length) {
   
      let filteredBooks = (bookSearch) ?
      this.books.filter(p => p.name.toLowerCase()      
      .includes(bookSearch.toLowerCase())) :
       this.books;      
       this.filteredBooks=filteredBooks;
       console.log(this.filteredBooks);
       
    } else {
       
    }

   

         
                
   }

   calculationWithPackinCoastAndCommision(clientInfo){
     console.log(clientInfo);
    this.clnt=clientInfo;

    console.log(this.clnt);
   const packhingCost=this.clnt.packingCoast;
   const total=this.total;

    this.clnt.total=( +total + +packhingCost);
  
    this.clnt.totalWithComiAndPackingCost=(this.clnt.total-this.clnt.commision);
  
    
   }
   calculationWitPreviousDue(clientInfo){
    this.clnt=clientInfo;
    this.clnt.totalWithPreviousDue=(+this.clnt.totalWithComiAndPackingCost + +this.clnt.dueAmount);
   }
   calculateCurrentdue(client){
    this.clnt=client;
    if(this.clnt.totalWithPreviousDue>0){
      this.clnt.currentDue=(this.clnt.totalWithPreviousDue-this.clnt.paidAmount);
    }
    else{
      this.clnt.currentDue=( +this.clnt.totalWithPreviousDue + +this.clnt.paidAmount);
    }
   
  
   }

   clearBook(newBookList){
    this.newBookList=[];
   }
   saveReport(client,newBookList){

  console.log(client);
  this.clnt=client;
  console.log('client info', this.clnt);
    this.clientReportService.getAllClientReport()
    .subscribe(data=>{
     this.clientReports=data;
     


     newBookList.forEach(element => {
      element.billNo='bill-00'+this.clientReports.length;
      this.bookReportService.insertBookReport(element).subscribe(data=>{
        
      })
    });

    this.clnt.billNo='bill-00'+this.clientReports.length;
    this.clientReportService.insertClientReport(this.clnt).subscribe(data=>{
      
    })

   this.billNo=this.clnt.billNo;

    });
   

    

   
  
  }
}
