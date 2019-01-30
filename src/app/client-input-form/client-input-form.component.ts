import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../client.service';
import { Client } from './../../../models/Angular/Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-input-form',
  templateUrl: './client-input-form.component.html',
  styleUrls: ['./client-input-form.component.scss']
})
export class ClientInputFormComponent implements OnInit {
 client=new Client();
 clients=[];
 id;
  constructor(private clientService:ClientService,
    private route:ActivatedRoute) {
 
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
    }, err => {
    });
    
   this.clientService.insertClient(client).subscribe(data=>{
    
})


  }

  update(Client){
   
    this.clientService.updateClient(Client)
    .subscribe(data=>{
     
    })
   // this.router.navigate(['/displayCategoryInfo']);
  }

}
