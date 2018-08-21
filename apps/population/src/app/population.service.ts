import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  something: any;

  constructor(private http: HttpClient) { }

  getPopulation() {
    return this.http.get<any>('http://api.population.io:80/1.0/population/1997/aged/1/')
      .pipe(map(res => res.concat(...res.map(arr => arr))));
  }
}
