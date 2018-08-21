import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  constructor(private http: HttpClient) { }

  getRockets() {
    return this.http.get('https://api.spacexdata.com/v2/rockets');
  }
}
