import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.scss']
})
export class AirListComponent implements OnInit {
  selectedCountry;
  breakpoint: number;

  @Input() countries: any;
  @Input() deselect: boolean;
  @Output() selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 1880) {
      this.breakpoint = 5;
    } else if (window.innerWidth < 1500) {
      this.breakpoint = 4;
    }
  }

  onResize(event) {
    if (event.target.innerWidth < 1880) {
      this.breakpoint = 5;
    } else if (window.innerWidth < 1550) {
      this.breakpoint = 4;
    }
  }

  selectCountry(country) {
    this.selected.emit(country)
    this.selectedCountry = country;
  }
}
