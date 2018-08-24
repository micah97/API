import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  deselect;
  countries;
  selectedCountry;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countries = countries;
        console.log('This is all I got', countries);
      });
  }

  selectCountry(country) {
    this.selectedCountry = country;
  }

  deselectCountry() {
    this.selectedCountry = false;
  }
}
