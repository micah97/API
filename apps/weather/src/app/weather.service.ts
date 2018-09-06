import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get(
      'http://api.airvisual.com/v2/states?country=USA&key=pJsjHqHCr5bKYAzse'
    );
  }

  getCities(state) {
    return this.http.get(
      `http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=pJsjHqHCr5bKYAzse`
    );
  }

  getWeather(city, state) {
    return this.http.get(
      `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=pJsjHqHCr5bKYAzse`
    );
  }
}
