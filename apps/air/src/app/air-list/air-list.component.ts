import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.scss']
})
export class AirListComponent implements OnInit {
  selectedCountry;

  @Input() countries: any;
  @Input() deselect: boolean;
  @Output() selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectCountry(country) {
    this.selected.emit(country)
    this.selectedCountry = country;
  }
}
