import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  selectedCity;

  @Input() states;
  @Input() cities;
  @Output() selected = new EventEmitter();
  @Output() selectCity = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectState(state) {
    this.selected.emit(state);
  }

  select(city) {
    this.selectedCity = city;
    this.selectCity.emit(city);
  }
}
