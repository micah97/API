import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Taco } from './taco.model';

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh/tacos/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({providedIn: 'root'})
export class TacosService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(taco: Taco) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(taco), HEADER);
  }

  update(taco: Taco) {
    return this.http.patch(`${BASE_URL}${taco.id}`, JSON.stringify(taco), HEADER);
  }

  delete(taco: Taco) {
    return this.http.delete(`${BASE_URL}${taco.id}`);
  }
}
