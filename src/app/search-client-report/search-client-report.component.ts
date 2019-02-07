import { ClientReportService } from './../client-report.service';
import { Client } from './../../../models/Angular/Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-client-report',
  templateUrl: './search-client-report.component.html',
  styleUrls: ['./search-client-report.component.scss']
})
export class SearchClientReportComponent implements OnInit {
  bills:Client[]=[];
  filteredBillNo:Client[]=[];

  constructor(private clientReportService:ClientReportService) { }

  filterReportByBillNO(query:string){

    console.log(query);
    let filterReports = (query) ?
      this.bills.filter(p => p.billNo
      .toLowerCase()
      .includes(query.toLowerCase())) :
       this.bills;      
       this.filteredBillNo=filterReports;
       console.log('filteredBillNo:',this.filteredBillNo);
  }


  ngOnInit() {
    this.clientReportService.getAllClientReport()
    .subscribe(res => {
      this.bills = res; 
      console.log(this.bills);
    }, err => {
      console.log(err);
    });

  }

}
