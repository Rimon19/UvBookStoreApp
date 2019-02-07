import { BookInfo } from './../../models/Angular/BookInfo';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookReportService {

  constructor(private http: HttpClient) { }

  getAllBookReport(): Observable<BookInfo[]> {
    return this.http.get<BookInfo[]>('http://localhost:3000/api/bookReport');
  }

  getBookReportById(id: string): Observable<BookInfo> {
    return this.http.get<BookInfo>('http://localhost:3000/api/bookReport/'+id);
  }

  insertBookReport(bookReport: BookInfo): Observable<BookInfo> {

    return this.http.post<BookInfo>('http://localhost:3000/api/bookReport/save', bookReport);
  }

  updateBookReport(bookReport: BookInfo): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/bookReport/' + bookReport.id, bookReport);
  }

  deleteBookReport(id: string) {
    return this.http.delete('http://localhost:3000/api/bookReport/' + id);
  }

}
