import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities;
  states;
  weather;
  selectedState;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.weatherService.getStates().subscribe((res: any) => {
      this.states = res.data;
    });
  }

  selectState(state) {
    this.selectedState = state;
    this.weatherService.getCities(state).subscribe((res: any) => {
      this.cities = res.data;
    });
  }

  selectCity(city) {
    this.weatherService
      .getWeather(city, this.selectedState)
      .subscribe((res: any) => {
        this.weather = res.data;
        console.log(this.weather, 'WEATHER');
      });
  }
}
