import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  url = 'https://xkcd.com/';

  constructor(private http: HttpClient) {}

  private buildHeaders() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'https://comics-api.surge.sh');
    headers.append('Access-Control-Allow-Origin', 'localhost:4200');
    return headers;
  }

  getRandomComic() {
    const headers = this.buildHeaders();
    const num = Math.floor(Math.random() * 255);

    return this.http.get(this.url + num + '/info.0.json', { headers });
  }

  getComicById(id) {
    const headers = this.buildHeaders();

    return this.http.get(this.url + id + '/info.0.json', { headers });
  }
}
