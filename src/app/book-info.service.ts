import {  BookInfo } from '../../models/Angular/BookInfo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  constructor(private http: HttpClient) {  }

  getAllBookInfo(): Observable<BookInfo[]> {
    return this.http.get<BookInfo[]>('http://localhost:3000/api/books');
  }

  getBookInfo(id: string): Observable<BookInfo> {
    return this.http.get<any>('http://localhost:3000/api/books/'+id);
  }

  insertBookInfo(bookInfo: BookInfo): Observable<BookInfo> {

    return this.http.post<BookInfo>('http://localhost:3000/api/books/save', bookInfo);
  }

  updateBookInfo(bookInfo: BookInfo): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/books/edit', bookInfo);
  }

  deleteBookInfo(id: string) {
    return this.http.delete('http://localhost:3000/api/books/delete/' + id);
  }


}
