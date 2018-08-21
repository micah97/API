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
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})
export class AppComponent implements OnInit {
  pokemon: Pokemon[];
  selectedPokemon: Pokemon;
  form: FormGroup;

  constructor(private pokemonService: PokemonService,
              private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getPokemon();
    this.initForm();
  }

  getPokemon() {
    this.pokemonService.getPokemon()
      .subscribe(pokemon => {
        this.pokemon = pokemon.results;
        console.log(pokemon);
      });
  }

  selectPoke(selectedPoke) {
    this.selectedPokemon = selectedPoke;
    this.getPoke(selectedPoke);
  }

  getPoke(poke) {
    this.pokemonService.getPoke(poke)
      .subscribe(res => {
        this.selectedPokemon = res;
        this.form.patchValue(this.selectedPokemon);
      })
  }

  reset() {
    this.form.reset();
    this.selectedPokemon = { } as any;
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
