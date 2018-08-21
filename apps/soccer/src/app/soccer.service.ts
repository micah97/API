import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  constructor(private http: HttpClient) { }

  private buildHeaders() {
    const headers = new HttpHeaders()
    headers.append('X-Auth-Token', '38c02aab2a4b4a07874837bb48b769e4')
    return headers;
  }

  getLeague() {
    const headers = this.buildHeaders();
    return this.http.get('http://api.football-data.org/v1/competitions/455/teams', { headers });
  }

  getTeamRoster(url) {
    const headers = this.buildHeaders();

    return this.http.get(url, { headers });
  }
}
