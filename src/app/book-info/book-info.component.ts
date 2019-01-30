import { Category } from './../../../models/Angular/category';
import { CategoryService } from './../category.service';
import { BookInfo } from './../../../models/Angular/BookInfo';
import { BookInfoService } from './../book-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  book=new BookInfo();
  data: BookInfo[] = [];
  categories:Category[]=[];

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private bookInfoService:BookInfoService,
    private categoryService:CategoryService) {
     
     }

  ngOnInit() {
   

    this.categoryService.getAllCategory().subscribe(data=>{
      this.categories=data;
      console.log(this.categories);
    })

  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  save(objBook){
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log('current file:',this.currentFileUpload);
    objBook.image=this.currentFileUpload;
    console.log(objBook);
    this.bookInfoService.insertBookInfo(objBook)
    .subscribe(data=>{console.log(data)});

  }
}
