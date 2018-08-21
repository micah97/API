import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'api-population-details',
  templateUrl: './population-details.component.html',
  styleUrls: ['./population-details.component.scss']
})
export class PopulationDetailsComponent implements OnInit {
  height = 400;
  width = 400;

  @Input() group: FormGroup;
  @Input() selectedCountry: any;
  @Input() set country(value) {
    this.selectedCountry = Object.assign({}, value);
  }

  @Output() saved = new EventEmitter();
  @Output() resetForm = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.selectedCountry = null;
    this.resetForm.emit()
  }

  submit(form) {
    console.log(form);
    console.log('%c GOT EM', 'font-size: 100px; background: red');
  }
}
