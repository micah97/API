import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AnimalsState } from './animals.reducer';
import * as AnimalsActions from './animals.actions';
import { AnimalsActionTypes } from './animals.actions';
import { selectAllAnimals, selectCurrentAnimal } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(selectAllAnimals));
  currentAnimal$ = this.store.pipe(select(selectCurrentAnimal));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === AnimalsActionTypes.AddAnimal ||
        action.type === AnimalsActionTypes.UpdateAnimal ||
        action.type === AnimalsActionTypes.DeleteAnimal
    )
  );

  constructor(
    private store: Store<AnimalsState>,
    private actions$: ActionsSubject
  ) {}

  selectAnimal(animalId) {
    this.store.dispatch(new AnimalsActions.AnimalSelected(animalId));
  }

  loadAll() {
    this.store.dispatch(new AnimalsActions.LoadAnimals());
  }

  addAnimal(animal) {
    this.store.dispatch(new AnimalsActions.AddAnimal(animal));
  }

  updateAnimal(animal) {
    this.store.dispatch(new AnimalsActions.UpdateAnimal(animal));
  }

  deleteAnimal(animal) {
    this.store.dispatch(new AnimalsActions.DeleteAnimal(animal));
  }
}
