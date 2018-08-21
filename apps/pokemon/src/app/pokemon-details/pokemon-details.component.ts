import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Pokemon } from "../../shared/pokemon";
import { FormGroup } from "@angular/forms";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'api-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
  providers: [PokemonService]
})
export class PokemonDetailsComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() selectedPokemon: Pokemon;
  @Input() set pokemon(value: Pokemon) {
    this.selectedPokemon = Object.assign({}, value);
  }
  @Output() resetForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
