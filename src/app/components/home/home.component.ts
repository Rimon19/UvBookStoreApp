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

  constructor(private homeService:HomeService) {
    
  
    homeService.getAllUser()  
    .subscribe(item=>{
      console.log(item)
    })
   }

  ngOnInit() {
  }

  testMethod(){

 //console.log(db);
   


 }

}
