import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Fruit } from './fruit.model';

const BASE_URL = 'https://level-up-api-rpjdxzwbqn.now.sh/fruits';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({providedIn: 'root'})
export class FruitService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    console.log(id, 'id');
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(fruit: Fruit) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(fruit), HEADER);
  }

  update(fruit: Fruit) {
    return this.http.patch(`${BASE_URL}/${fruit.id}`, JSON.stringify(fruit), HEADER);
  }

  delete(fruit: Fruit) {
    return this.http.delete(`${BASE_URL}/${fruit.id}`);
  }
}
