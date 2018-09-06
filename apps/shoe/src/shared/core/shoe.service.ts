import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Shoe } from './shoe.model';

const BASE_URL = 'https://level-up-api-qsbnyvhbjl.now.sh/shoes';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({providedIn: 'root'})
export class ShoesService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    console.log(id, 'id');
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(shoe: Shoe) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(shoe), HEADER);
  }

  update(shoe: Shoe) {
    return this.http.patch(`${BASE_URL}/${shoe.id}`, JSON.stringify(shoe), HEADER);
  }

  delete(shoe: Shoe) {
    return this.http.delete(`${BASE_URL}/${shoe.id}`);
  }
}
