import { BookInfoService } from './../book-info.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-books-info',
  templateUrl: './display-books-info.component.html',
  styleUrls: ['./display-books-info.component.scss']
})
export class DisplayBooksInfoComponent implements OnInit {
books=[];


  constructor(private bookService:BookInfoService) { 
    bookService.getAllBookInfo()
    .subscribe(res => {
      this.books = res;     
      // this.books.forEach(element => {
     
      //   console.log(element.image)
      // });
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

 

}
