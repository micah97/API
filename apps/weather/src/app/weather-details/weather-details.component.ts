import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() icon;
  @Input() weather;

  constructor() {}

  ngOnInit() {}
}
