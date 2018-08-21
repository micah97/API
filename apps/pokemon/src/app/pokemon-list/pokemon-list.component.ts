import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from "../../shared/pokemon";

@Component({
  selector: 'api-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() selectPoke = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
