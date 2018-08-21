import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefinitionService {

  constructor(private http: HttpClient) { }

  getDefinition(search) {
    return this.http.get('http://universities.hipolabs.com/search?name=' + search);
  }
}
