import { Category } from './../../../models/Angular/category';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-category-input-form',
  templateUrl: './category-input-form.component.html',
  styleUrls: ['./category-input-form.component.scss']
})
export class CategoryInputFormComponent implements OnInit {
  category=new Category();
  id;
  Message='';
  action='';
  constructor(private categoryServic:CategoryService,
    private route:ActivatedRoute,
    private router:Router,
    private snackBar: MatSnackBar) {

      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id!=null){
        this.categoryServic.getCategory(this.id)
        .subscribe(data=>{
          this.category=data;
        });
      }
   
   }


  ngOnInit(){
   
  } 

  save(category){
   this.categoryServic.insertCategory(category)
   .subscribe(data=>{
   
      });
      this.Message='Successfullay Saved !';
      this.snackBar.open(this.Message, this.action, {
      duration: 2000,
    });
  
    this.Message='';
      // this.router.navigate(['/displayCategoryInfo']);

  }

  update(category){
   
    this.categoryServic.updateCategory(category)
    .subscribe(data=>{
     
    });
    this.Message='Successfullay Updated !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });

  this.Message='';
    
  }
  
  delete(id){
   
   
    this.categoryServic.deleteCategory(id).subscribe(data=>{
      
    });
    this.Message='Successfullay Deleted !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });

  this.Message='';
   
  }
}
