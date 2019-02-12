import { BookInfoService } from './../book-info.service';

import { BookInfo } from './../../../models/Angular/BookInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
books:BookInfo[]=[];
filteredBooks:BookInfo[]=[];
  constructor(private bookInfoService:BookInfoService) {
    
   }

  ngOnInit() {
    this.bookInfoService.getAllBookInfo()
    .subscribe(res => {
      this.books = res; 
                  
    }, err => {
      console.log(err);
    });
  }

  filter(mainSearch: string) { 
    console.log(mainSearch);
    let filteredBooks = (mainSearch) ?
    this.books.filter(p => p.name
    .toLowerCase()
    .includes(mainSearch.toLowerCase())) :
     this.books;      
     this.filteredBooks=filteredBooks;
     console.log('app-Header book Search:',this.filteredBooks);   
   }
}
