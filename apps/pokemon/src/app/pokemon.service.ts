import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getPoke(url) {
    return this.http.get<any>(url)
      .pipe(
        map(res => res)
      );
  }
}
