import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(movie) {
    return this.http.get('http://www.omdbapi.com/?apikey=579843d8&t=' + movie);
  }

}
