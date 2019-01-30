import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-category-infos',
  templateUrl: './display-category-infos.component.html',
  styleUrls: ['./display-category-infos.component.scss']
})
export class DisplayCategoryInfosComponent implements OnInit {
  categories;
  constructor(private categoryServic:CategoryService,
    private router:Router) {

    
    categoryServic.getAllCategory()
    .subscribe(res => {
      this.categories = res;
      console.log(this.categories);
     // this.isLoadingResults = false;
    }, err => {
      console.log(err);
     // this.isLoadingResults = false;
    });
   }

  ngOnInit() {
  }

  delete(id){
   
   
    this.categoryServic.deleteCategory(id).subscribe(data=>{
      
    })
   
  }
}
