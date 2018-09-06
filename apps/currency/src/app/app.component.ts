import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currency;
  currencies;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  searchCurrency(currency) {

    console.log(currency, 'CURRENCY');
    // this.currencyService.getCurrencies()
    //   .subscribe(res => {
    //     this.currency = res;
    //     console.log(this.currency, 'CURR');
    // })
  }

  getCurrencies() {
    this.currencyService.getCountryCurrency()
      .subscribe(((res: any) => {
        this.currencies = res.currencies;
        console.log(this.currencies, 'CURR');
      })
  }
}
