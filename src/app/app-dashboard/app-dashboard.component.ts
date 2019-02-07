import { Client } from './../../../models/Angular/Client';
import { BookInfo } from './../../../models/Angular/BookInfo';
import { ClientReportService } from './../client-report.service';
import { ClientService } from './../client.service';
import { BookInfoService } from './../book-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {
totalBooks:number;
totalClients:number;
totalSales:number;
books:BookInfo[]=[];
clients:Client[]=[];
sales:Client[]=[];

  constructor(private bookService:BookInfoService,
    private clientService:ClientService,
    private clientReportService:ClientReportService) { }

  ngOnInit() {
    this.bookService.getAllBookInfo().subscribe(d=>{
      this.books=d;
      this.totalBooks=this.books.length;
    });
    this.clientService.getAllClient().subscribe(d=>{
      this.clients=d;
      this.totalClients=this.clients.length;
    });
    this.clientReportService.getAllClientReport().subscribe(d=>{
      this.sales=d;
      this.totalSales=this.sales.length;
    });
  }

}
