import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

const BASE_URL = 'https://level-up-api-vuhmzxgkoy.now.sh/todos/';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(todo: Todo) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(todo), HEADER);
  }

  update(todo: Todo) {
    return this.http.patch(
      `${BASE_URL}${todo.id}`,
      JSON.stringify(todo),
      HEADER
    );
  }

  delete(todo: Todo) {
    return this.http.delete(`${BASE_URL}${todo.id}`);
  }

  search(term: string) {
    const params = new HttpParams();
    params.set('q', term);

    return this.http.get(`${BASE_URL}`, { params });
  }
}
