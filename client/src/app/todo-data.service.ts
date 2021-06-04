import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from './todo';
import {Observable, of} from 'rxjs';
import {port} from '../../../server.js'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  url = `http://localhost:3000/todos`;

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id: number): Observable<Todo> {
return this.http.get<Todo>(this.url + '/' + id);
  }

  addTodo(todo: Todo): Observable<Todo> {

    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.url + '/' + id);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.url + '/' + todo.id, todo);
  }

  constructor(private http: HttpClient) { }
}
