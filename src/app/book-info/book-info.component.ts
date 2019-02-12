import { ActivatedRoute } from '@angular/router';
import { Category } from './../../../models/Angular/category';
import { CategoryService } from './../category.service';
import { BookInfo } from './../../../models/Angular/BookInfo';
import { BookInfoService } from './../book-info.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  book=new BookInfo();

  categories:Category[]=[];

  selectedFiles: FileList;
  currentFileUpload: File;
  id;
  Message='';
  action='';
  constructor(private bookInfoService:BookInfoService,
    private categoryService:CategoryService,
    private route:ActivatedRoute,
  private snackBar: MatSnackBar
    ) {
      
     if(this.route.snapshot.paramMap.get('id')!=null){
      this.id = this.route.snapshot.paramMap.get('id');
     }
      
      if(this.id!=null){
        console.log('cons id',this.id);
        this.bookInfoService.getBookInfo(this.id)
        .subscribe(data=>{
          this.book=data;
          console.log('cons book info',this.book);
        });
        
      }
      
  

     }

  ngOnInit() {
  
    this.categoryService.getAllCategory().subscribe(data=>{
      this.categories=data;
   
    })

  }
  
  // selectFile(event) {
  //   this.selectedFiles = event.target.files;
  // }
 
  save(objBook){
    // this.currentFileUpload = this.selectedFiles.item(0);  
    // objBook.image=this.currentFileUpload;
    this.bookInfoService.insertBookInfo(objBook)
    .subscribe(data=>{
    

    });

    this.Message='Successfullay Saved !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });

  this.Message='';
  this.book.name=null;
  this.book.basePrice=null;
  this.book.publisher=null;
  this.book.categoryId=null;
  this.book.author=null;
  this.book.publicherYear=null;
 
  }

  update(book){
   
    this.bookInfoService.updateBookInfo(book)
    .subscribe(data=>{});
  
    this.Message='Successfullay Updated !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });
  this.Message='';


    
  }
  delete(id){
   
   
    this.bookInfoService.deleteBookInfo(id).subscribe(data=>{
      
    });
    this.Message='Successfullay Deleted !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });
  this.Message='';
 
   
  }
}
