import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HomeService {
  
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/courses/');
  }
}
