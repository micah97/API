import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get(
      'http://apilayer.net/api/live?access_key=2d48856e3d340441ba4d42803892a25f'
    );
  }

  getCountryCurrency() {
    return this.http.get(
      'http://apilayer.net/api/list?access_key=2d48856e3d340441ba4d42803892a25f&currencies'
    );
  }
}
