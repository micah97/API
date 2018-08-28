import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private buildHeaders() {
    const headers = new HttpHeaders()
    headers.append('x-api-key', 'b1665d8a-f5a3-4df7-bd50-afb2dddd2675')
    return headers;
  }

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get('https://api.thedogapi.com/v1/breeds?limit=20&page=6');
  }

  getDog(id) {
    return this.http.get('https://api.thedogapi.com/v1/breeds/' + id);
  }
}
