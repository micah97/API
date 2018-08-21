import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planet.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets: any[];
  selectedPlanet: any;

  constructor(private planetService: PlanetsService) {

  }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets()
      .subscribe(
        planets => {
          this.planets = planets.results;
          console.log(planets.results, 'PLANETS');
        });
    }

  selectPlanet(planet) {
    this.selectedPlanet = planet;
  }

}
