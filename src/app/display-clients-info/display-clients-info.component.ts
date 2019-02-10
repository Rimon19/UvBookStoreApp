import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-clients-info',
  templateUrl: './display-clients-info.component.html',
  styleUrls: ['./display-clients-info.component.scss']
})
export class DisplayClientsInfoComponent implements OnInit {
  clients=[];
  constructor(private clientService:ClientService) {

    
   }

  ngOnInit() {
    this.clientService.getAllClient()
    .subscribe(res => {
      this.clients = res;
     
    }, err => {
    });
  }
  

}
