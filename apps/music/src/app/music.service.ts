import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = 'https://level-up-api-mefqhdpvub.now.sh/instruments';

  constructor(private http: HttpClient) {}

  getInstruments() {
    return this.http.get(this.url);
  }

  create(inst) {
    return this.http.post(this.url, inst);
  }

  update(inst) {
    return this.http.put(this.url + '/' + inst.id, inst);
  }

  delete(inst) {
    return this.http.delete(this.url + '/' + inst.id);
  }
}
