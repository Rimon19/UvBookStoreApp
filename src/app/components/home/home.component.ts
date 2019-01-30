import { BookInfo } from './../../../../models/Angular/BookInfo';

import { HomeService } from './../../home.service';
import { BookInfoService } from './../../book-info.service';
import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

//import { db } from 'C:/Users/Rimon/Desktop/angular-electron/models/index.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
book=new BookInfo();
data: BookInfo[] = [];
  constructor(private bookInfoService:BookInfoService) {
   
   
   }

  ngOnInit() {
    this.bookInfoService.getAllBookInfo()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
     // this.isLoadingResults = false;
    }, err => {
      console.log(err);
     // this.isLoadingResults = false;
    });
  }

  
 

}
