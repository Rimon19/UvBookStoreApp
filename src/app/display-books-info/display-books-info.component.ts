import { Category } from './../../../models/Angular/category';
import { CategoryService } from './../category.service';
import { BookInfo } from './../../../models/Angular/BookInfo';
import { BookInfoService } from './../book-info.service';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-display-books-info',
  templateUrl: './display-books-info.component.html',
  styleUrls: ['./display-books-info.component.scss']
})
export class DisplayBooksInfoComponent implements OnInit {

books: BookInfo[];
  tableResource: DataTableResource<BookInfo>;
  items: BookInfo[] = [];
  itemCount: number; 
  categories:Category[]=[];
  fb:Category[]=[];
  category=new Category();
  constructor(private bookService:BookInfoService,
    private categoryService:CategoryService) { 
   
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(data=>{
      this.categories=data;
    });

    this.bookService.getAllBookInfo()
    .subscribe(res => {
      this.books = res;   
       this.books.forEach(element => {

         let fb = (element.categoryId) ?
        this.categories.filter(p => p.id==
          element.categoryId) :this.categories;
          this.fb=fb;
         element.categoryName=this.fb[0].categoryName;
       });
      this.initializeTable(this.books);
      console.log(this.books);
    }, err => {
      console.log(err);
    });


  }

  
  private initializeTable(products: BookInfo[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);    
  }

  filterByName(query: string) { 
    let filteredProducts = (query) ?
      this.books.filter(p => p.name.toLowerCase()
      .includes(query.toLowerCase())) :
      this.books;
      console.log(this.books);

    this.initializeTable(filteredProducts);
  }
 
  public filterbyCategory(query) {  // event will give you full breif of action
    let filteredProducts = (query) ?
    this.books.filter(p => p.categoryId==
    query) :this.books;
    
    console.log(this.books);

  this.initializeTable(filteredProducts);
  }

}
