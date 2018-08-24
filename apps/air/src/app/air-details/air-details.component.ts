import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-air-details',
  templateUrl: './air-details.component.html',
  styleUrls: ['./air-details.component.scss']
})
export class AirDetailsComponent implements OnInit {

  @Input() selectedCountry: any;
  @Output() deselected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  deselect() {
    this.deselected.emit();
    this.selectedCountry = false;
  }
}
