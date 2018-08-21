import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'api-population-list',
  templateUrl: './population-list.component.html',
  styleUrls: ['./population-list.component.scss']
})
export class PopulationListComponent implements OnInit {
  selected: any;

  @Input() countries: any;
  @Output() selectCountry = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitCountry(country) {
    this.selectCountry.emit(country);
    this.selected = country;
  }
}
