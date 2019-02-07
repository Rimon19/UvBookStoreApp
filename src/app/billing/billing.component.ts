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
    private router:Router,) { 
     console.log('fromConstructor:',this.newBookList);
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
      console.log(this.clients);
    }, err => {
      console.log(err);
    });
  }

  addList(book){
  console.log(book);
  this.newBookList.push(book);
  console.log(this.newBookList);

  }

  updateBookList(book){
  
    this.newBookList.map((todo, i) => {
      console.log('book.discount:',book.discount)
      if (todo.id == book.id){
        console.log('listid:',todo.id);
        console.log('updatedId:',book.id);
        console.log('shouldBeUpdated-discount:',this.newBookList[i].discount)
         this.newBookList[i].discount=book.discount;

         const sTotal=(this.newBookList[i].basePrice*book.discount);
         const dDiscount=(sTotal/100);

         this.newBookList[i].subTotal=this.newBookList[i].basePrice-dDiscount;
       }
      
      //  this.newBookList.forEach(element => {
      //   console.log(element);
      //   console.log('elementSubtotal:',element.subTotal) ;
      //   this.total+=element.subTotal;
 
      //  });
      //  console.log('total:',this.total);
     });
    //  console.log('outsideMap:',this.newBookList);
    //  for (let i = 0; i < this.newBookList.length; i++) {
    //     this.total = this.newBookList[i].subTotal;
    //     console.log('UnderLooptotal:',this.total);
    //  }
     this.total = this.newBookList.filter((item) =>item.subTotal)
                            .map((item) => +item.subTotal)
                            .reduce((sum, current) => sum + current);
        console.log('total:',this.total);
  }

  filterClients(query: string) { 
       
      console.log(query); 
      let filterClents = (query) ?
        this.clients.filter(p => p.name
        .toLowerCase()
        .includes(query.toLowerCase())) :
         this.clients;      
         this.filteredClients=filterClents;
         console.log('filterClients:',this.filteredClients);          
   
   }
 selectClient(clientId){
  if (clientId) this.clientService.getClient(clientId)
  .subscribe(p => this.client = p);
  console.log('selectedClient',this.client);    
}

   filterBooks(query: string) { 
      console.log(query);
      let filteredBooks = (query) ?
        this.books.filter(p => p.name
        .toLowerCase()
        .includes(query.toLowerCase())) :
         this.books;      
         this.filteredBooks=filteredBooks;
         console.log('filteredBooks:',this.filteredBooks);          
   }

   calculationWithPackinCoastAndCommision(clientInfo){
    this.client=clientInfo;
    console.log('total',this.total);

   const packhingCost=this.client.packingCoast;
   const total=this.total;

    this.client.total=(total+packhingCost);
    console.log('packing Cost',this.client.packingCoast);
    console.log('totalwithPacking',this.client.total);
    this.client.totalWithComiAndPackingCost=(this.client.total-this.client.commision);
    console.log('commision',this.client.commision);
    console.log('totalAfterdeductedCommision',this.client.totalWithComiAndPackingCost);
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
      this.client.currentDue=(this.client.totalWithPreviousDue+this.client.paidAmount);
    }
   
  
   }


   saveReport(client,newBookList){

    console.log('client',client);
    console.log('new book list',newBookList);
    this.clientReportService.getAllClientReport()
    .subscribe(data=>{
     console.log('all Client reports',data);
     this.clientReports=data;
      

     client.billNo='bill-00'+this.clientReports.length;
     console.log('lenth',this.clientReports.length);
     this.clientReportService.insertClientReport(client).subscribe(data=>{
       console.log('inserted data',data)
     })

     newBookList.forEach(element => {
       element.billNo='bill-00'+this.clientReports.length;
       this.bookReportService.insertBookReport(element).subscribe(data=>{
         console.log('inserted Book result',data)
       })
     });
    
    this.billNo=client.billNo;

    }) 
   
  
  }
}
