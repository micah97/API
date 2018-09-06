import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pizza } from './pizza.model';

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh/pizzas/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({providedIn: 'root'})
export class PizzasService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(pizza: Pizza) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(pizza), HEADER);
  }

  update(pizza: Pizza) {
    return this.http.patch(`${BASE_URL}${pizza.id}`, JSON.stringify(pizza), HEADER);
  }

  delete(pizza: Pizza) {
    return this.http.delete(`${BASE_URL}${pizza.id}`);
  }
}
