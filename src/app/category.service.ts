import { Category } from './../../models/Angular/category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/api/category');
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>('http://localhost:3000/api/category/'+id);
  }

  insertCategory(category: Category): Observable<Category> {
    
    return this.http.post<Category>('http://localhost:3000/api/category/save', category);
  }

  updateCategory(category: Category): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/category/edit', category);
  }

  deleteCategory(id: string) {
    return this.http.delete('http://localhost:3000/api/category/delete/'+id);
  }
}
