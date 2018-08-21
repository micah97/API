import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'api-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {
  selected = false;

  @Input() rockets: any;
  @Output() selectRocket = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitRocket(rocket) {
    this.selected = rocket;
    this.selectRocket.emit(rocket)
  }
}
