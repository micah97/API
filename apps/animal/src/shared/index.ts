import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAnimals from './state/animals.reducer';

export interface AppState {
  animals: fromAnimals.AnimalsState;
}

export const reducers: ActionReducerMap<AppState> = {
  animals: fromAnimals.animalsReducer
};

export const selectAnimalAnimalsState = createFeatureSelector<
  fromAnimals.AnimalsState
>('animals');

export const selectAnimalIds = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalIds
);
export const selectAnimalEntities = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalEntities
);
export const selectAllAnimals = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAllAnimals
);
export const selectAnimalTotal = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalTotal
);
export const selectCurrentAnimalId = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.getSelectedAnimalId
);

export const selectCurrentAnimal = createSelector(
  selectAnimalEntities,
  selectCurrentAnimalId,
  (animalEntities, animalId) => {
    const emptyAnimal = {
      id: null,
      name: '',
      mass: 0,
      continent: '',
      height: ''
    };
    return animalId ? animalEntities[animalId] : emptyAnimal;
  }
);
