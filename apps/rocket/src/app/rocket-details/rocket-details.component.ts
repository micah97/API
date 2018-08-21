import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'api-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss']
})
export class RocketDetailsComponent implements OnInit {
  condition = true;

  @Input() selectedRocket: any;
  @Input() group: FormGroup;
  @Input() set rocket(value) {
    this.selectedRocket = Object.assign({}, value);
  }
  @Output() reset = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  submit(group) {
    console.log(group.value);
    console.log('%c MISMO', 'font-size: 100px; color: white; padding-right: 50px; background: #D7263D')
  }
}
