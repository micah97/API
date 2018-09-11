import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Animal } from './animal.model';

const BASE_URL = 'https://level-up-api-qllahajrnz.now.sh/animals';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL);
  }

  load(id) {
    console.log(id, 'id');
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(animal: Animal) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(animal), HEADER);
  }

  update(animal: Animal) {
    return this.http.patch(
      `${BASE_URL}/${animal.id}`,
      JSON.stringify(animal),
      HEADER
    );
  }

  delete(animal: Animal) {
    return this.http.delete(`${BASE_URL}/${animal.id}`);
  }
}
