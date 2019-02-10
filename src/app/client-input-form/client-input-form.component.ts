import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../client.service';
import { Client } from './../../../models/Angular/Client';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-client-input-form',
  templateUrl: './client-input-form.component.html',
  styleUrls: ['./client-input-form.component.scss']
})
export class ClientInputFormComponent implements OnInit {
 client=new Client();
 clients=[];
 id;
 Message='';
  action='';
  constructor(private clientService:ClientService,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar) {
 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!=null){
      this.clientService.getClient(this.id)
      .subscribe(data=>{
        this.client=data;
      });
    }

   }

  ngOnInit() {
  }

  save(client){
    this.clientService.getAllClient()
    .subscribe(res => {
      this.clients = res;
      client.ClientId="clnt0"+(this.clients.length+1);
      this.clientService.insertClient(client).subscribe(data=>{
    
      });
      this.Message='Successfullay Saved !';
      this.snackBar.open(this.Message, this.action, {
      duration: 2000,
    });
  
    this.Message='';      
    }, err => {
    });
    
 

  }

  update(Client){
   
    this.clientService.updateClient(Client)
    .subscribe(data=>{
     this.client=null;
    });
    this.Message='Successfullay Updated !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });

  this.Message='';
   // this.router.navigate(['/displayCategoryInfo']);
  }

  delete(id){
   
   
    this.clientService.deleteClient(id).subscribe(data=>{
      
    });
    this.Message='Successfullay Deleted !';
    this.snackBar.open(this.Message, this.action, {
    duration: 2000,
  });

  this.Message='';
   
  }

}
