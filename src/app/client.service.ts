import { Client } from './../../models/Angular/Client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/api/client');
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>('http://localhost:3000/api/client/'+id);
  }

  insertClient(client: Client): Observable<Client> {
    
    return this.http.post<Client>('http://localhost:3000/api/client/save', client);
  }

  updateClient(client: Client): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/client/edit', client);
  }

  deleteClient(id: string) {
    return this.http.delete('http://localhost:3000/api/client/delete/'+id);
  }
}
