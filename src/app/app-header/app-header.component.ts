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
  }

  filter(query: string) { 
  
    this.bookInfoService.getAllBookInfo()
    .subscribe(res => {
      this.books = res; 
      
      console.log(query);
      let filteredBooks = (query) ?
        this.books.filter(p => p.name
        .toLowerCase()
        .includes(query.toLowerCase())) :
         this.books;      
         this.filteredBooks=filteredBooks;
         console.log('filteredBooks:',this.filteredBooks);          
    }, err => {
      console.log(err);
    });
  
   }
}
