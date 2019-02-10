import { BookInfo } from './../../../models/Angular/BookInfo';
import { BookInfoService } from './../book-info.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnDestroy {
id;
book=new BookInfo();
  constructor(private route:ActivatedRoute,
    private bookInfoService:BookInfoService) {
    this.id = this.route.snapshot.paramMap.get('id');
      if(this.id!=null){
        this.bookInfoService.getBookInfo(this.id)
        .subscribe(data=>{
          this.book=data;
        });
      }
   }

  ngOnDestroy() {
    this.book=null;
  }
  

}
