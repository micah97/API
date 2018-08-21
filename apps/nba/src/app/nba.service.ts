import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  thing;

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get('https://level-up-api-wkjxerdouc.now.sh/players')
  }
}
