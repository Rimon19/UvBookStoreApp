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
    if(book.discount==undefined||book.discount==null){book.discount=0;}
  
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
 
  // let filterClents = (clientId) ?
  // this.clients.filter(p => p.id==clientId) :
  //  this.clients;      
  //  this.filteredClients=filterClents;  
  //  this.filteredClients .forEach(element => {
  //    this.clnt=element;
     
  //  });

   
   if (clientId) this.clientService.getClient(clientId)
  .subscribe(p => {
    this.clnt= p;
    
  });

}

   filterBooks(bookSearch: string) { 
    
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
    
    this.clnt=clientInfo;

if(this.clnt.packingCoast==undefined||this.clnt.packingCoast==null){
  this.clnt.packingCoast=0;
}
if(this.clnt.commision==undefined||this.clnt.commision==null){
  this.clnt.commision=0;
}
  

    this.clnt.total=( +this.total + +this.clnt.packingCoast);
  
    this.clnt.totalWithComiAndPackingCost=(this.clnt.total-this.clnt.commision);
    console.log(this.clnt.totalWithComiAndPackingCost);
    
   }
   calculationWitPreviousDue(clientInfo){

    if(this.clnt.packingCoast==undefined||this.clnt.packingCoast==null){
      this.clnt.packingCoast=0;
    }
    if(this.clnt.commision==undefined||this.clnt.commision==null){
      this.clnt.commision=0;
    }
    if(this.clnt.totalWithComiAndPackingCost==undefined||this.clnt.totalWithComiAndPackingCost==null){
      this.clnt.commision=this.total;
    }

          
    if(this.clnt.totalWithComiAndPackingCost==undefined||this.clnt.totalWithComiAndPackingCost==null){
      this.clnt.totalWithComiAndPackingCost=0;
    }
    if(this.clnt.dueAmount==undefined||this.clnt.dueAmount==null){
      this.clnt.dueAmount=0;
    }
    this.clnt=clientInfo;
    this.clnt.totalWithPreviousDue=(+this.clnt.totalWithComiAndPackingCost + +this.clnt.dueAmount);
   }
   calculateCurrentdue(client){
    this.clnt=client;

    if(this.clnt.packingCoast==undefined||this.clnt.packingCoast==null){
      this.clnt.packingCoast=0;
    }
    if(this.clnt.commision==undefined||this.clnt.commision==null){
      this.clnt.commision=0;
    }
          
    if(this.clnt.totalWithComiAndPackingCost==undefined||this.clnt.totalWithComiAndPackingCost==null){
      this.clnt.totalWithComiAndPackingCost=this.total;
    }
    if(this.clnt.dueAmount==undefined||this.clnt.dueAmount==null){
      this.clnt.dueAmount=0;
    }
    if(this.clnt.totalWithPreviousDue==undefined||this.clnt.totalWithPreviousDue==null){
      this.clnt.totalWithPreviousDue=this.clnt.totalWithComiAndPackingCost;
    }
    if(this.clnt.paidAmount==undefined||this.clnt.paidAmount==null){
      this.clnt.paidAmount=0;
    }
    if(this.clnt.finalTotal==undefined||this.clnt.finalTotal==null){
      this.clnt.finalTotal=this.clnt.totalWithPreviousDue;
    }


    
    if(this.clnt.totalWithPreviousDue>0){

      this.clnt.currentDue=(this.clnt.totalWithPreviousDue-this.clnt.paidAmount);
    }
    else{
      this.clnt.currentDue=( +this.clnt.totalWithPreviousDue + +this.clnt.paidAmount);
    }
   
  
   }

   clearBook(newBookList){
    this.newBookList=[];
    this.newBookList.forEach(element => {
      element.discount=null;
    });
    this.clnt=new Client();    
    this.total=null;
    this.clnt.packingCoast=null;
    this.clnt.commision=null;
    this.clnt.totalWithComiAndPackingCost=null;
    this.clnt.dueAmount=null;
    this.clnt.totalWithPreviousDue=null;
    this.clnt.paidAmount=null;
    this.clnt.currentDue=null;
   }
   saveReport(client,newBookList){

    //initial checking 
    if(client.name!=undefined&&newBookList[0].name!=undefined&&client.name!=null&&newBookList[0].name!=null){

// furture checking 

if(this.clnt.packingCoast==undefined||this.clnt.packingCoast==null){
  this.clnt.packingCoast=0;
}
if(this.clnt.commision==undefined||this.clnt.commision==null){
  this.clnt.commision=0;
}
      
if(this.clnt.totalWithComiAndPackingCost==undefined||this.clnt.totalWithComiAndPackingCost==null){
  this.clnt.totalWithComiAndPackingCost=this.total;
}
if(this.clnt.dueAmount==undefined||this.clnt.dueAmount==null){
  this.clnt.dueAmount=0;
}
if(this.clnt.totalWithPreviousDue==undefined||this.clnt.totalWithPreviousDue==null){
  this.clnt.totalWithPreviousDue=this.clnt.totalWithComiAndPackingCost;
}
if(this.clnt.paidAmount==undefined||this.clnt.paidAmount==null){
  this.clnt.paidAmount=0;
}
if(this.clnt.currentDue==undefined||this.clnt.currentDue==null){
  this.clnt.currentDue=0;
}
if(this.clnt.total==undefined||this.clnt.total==null){
  this.clnt.total=this.total;
}
if(this.clnt.finalTotal==undefined||this.clnt.finalTotal==null){
  this.clnt.finalTotal=this.clnt.totalWithPreviousDue;
}
//saving data

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
}
