import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-planet',
  templateUrl: './selected-planet.component.html',
  styleUrls: ['./selected-planet.component.css']
})
export class SelectedPlanetComponent implements OnInit {
  @Input() selectedPlanet;

  constructor() { }

  ngOnInit() {
  }

}
