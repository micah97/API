import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrument } from './instrument.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {
  url = 'https://level-up-api-mefqhdpvub.now.sh/instruments';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.url);
  }

  load(id) {
    return this.http.get(this.url + '/' + id);
  }

  create(inst: Instrument) {
    return this.http.post(this.url, inst);
  }

  update(inst: Instrument) {
    return this.http.put(this.url + '/' + inst.id, inst);
  }

  delete(inst: Instrument) {
    return this.http.delete(this.url + '/' + inst.id);
  }
}
