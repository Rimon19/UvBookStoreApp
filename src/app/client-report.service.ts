import { Client } from './../../models/Angular/Client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientReportService {

  constructor(private http: HttpClient) { }
  getAllClientReport(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/api/clientReport');
  }

  getClientReportById(id: string): Observable<Client> {
    return this.http.get<Client>('http://localhost:3000/api/clientReport/'+id);
  }

  insertClientReport(clientReport: Client): Observable<Client> {

    return this.http.post<Client>('http://localhost:3000/api/clientReport/save', clientReport);
  }

  updateClientReport(bookReport: Client): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/clientReport/' + bookReport.id, bookReport);
  }

  deleteClientReport(id: string) {
    return this.http.delete('http://localhost:3000/api/clientReport/' + id);
  }


}
