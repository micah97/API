import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanetsService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
  providers: [PlanetsService]
})
export class PlanetListComponent implements OnInit {
  selectedPlanet;

  @Input() planets;
  @Output() select = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  selectPlanet(planet) {
    this.select.emit(planet);
    this.selectedPlanet = planet;
  }

}
