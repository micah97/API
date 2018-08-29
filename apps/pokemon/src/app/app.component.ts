import {Component, OnInit} from '@angular/core';
import { PokemonService } from "./pokemon.service";
import { Pokemon } from "../shared/pokemon";
import {Sprite} from "../shared/sprite";
import {Move} from "../shared/move";
import {Abilities} from "../shared/abilities";
import {Stats} from "../shared/stats";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokemonService]
})
export class AppComponent implements OnInit {
  pokemon;
  isLoading;
  selectedPokemon;
  form: FormGroup;

  constructor(private pokemonService: PokemonService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemon()
      .subscribe(pokemon => {
        this.pokemon = pokemon.results;
      });
  }

  selectPoke(selectedPoke) {
    this.isLoading = true;
    this.getPoke(selectedPoke);
    this.selectedPokemon = selectedPoke;
  }

  getPoke(poke) {
    this.pokemonService.getPoke(poke)
      .subscribe(res => {
        this.selectedPokemon = res;
        this.form.patchValue(this.selectedPokemon);
        this.isLoading = false;
      })
  }

  reset() {
    this.form.reset();
    this.selectedPokemon = false;
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      weight: [''],
      height: [''],
      abilities: [''],
      stats: [''],
      moves: [''],
      sprite: ['']
    });
  }
}
