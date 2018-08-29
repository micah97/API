import { Pokemon } from "../../shared/pokemon";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'api-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  poke;
  selectedPoke;

  @Input() pokemon: Pokemon;
  @Output() isLoading = new EventEmitter();
  @Output() selectPoke = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(url) {
    this.selectedPoke = this.poke;
    this.isLoading.emit();
    this.selectPoke.emit(url);
  }
}
