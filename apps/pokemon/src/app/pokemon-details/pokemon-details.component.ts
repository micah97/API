import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from "../../shared/pokemon";
import { FormGroup } from "@angular/forms";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'api-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  providers: [PokemonService]
})
export class PokemonDetailsComponent implements OnInit {

  @Input() isLoading: any;
  @Input() group: FormGroup;
  @Input() selectedPokemon: Pokemon;
  @Input() set pokemon(value: Pokemon) {
    this.selectedPokemon = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.group.reset();
    this.selectedPokemon = { } as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(poke) {
    console.log(poke, 'YA SAVED IT, OKAY?!');
  }
}
