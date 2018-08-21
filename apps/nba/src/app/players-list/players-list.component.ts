import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players: any;
  @Output() select = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

// selectPlanet(planet) {
    // this.select.emit(planet);
    // this.selectedPlanet = planet;
  // }
}
