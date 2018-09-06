import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url = 'https://level-up-api-qllahajrnz.now.sh';

  constructor(private http: HttpClient) {}

  getanimals() {
    return this.http.get(this.url + '/animals');
  }

  create(animal) {
    return this.http.post(this.url + '/animals', animal);
  }

  update(animal) {
    return this.http.put(this.url + '/animals/' + animal.id, animal);
  }

  delete(animal) {
    return this.http.delete(this.url + '/animals/' + animal.id);
  }
}
