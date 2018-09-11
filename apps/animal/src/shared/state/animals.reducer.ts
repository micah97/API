import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal } from '../core/animal.model';

import { AnimalsActions, AnimalsActionTypes } from './animals.actions';

export interface AnimalsState extends EntityState<Animal> {
  selectedAnimalId: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();
export const initialState: AnimalsState = adapter.getInitialState({
  selectedAnimalId: null
});

export function animalsReducer(
  state = initialState,
  action: AnimalsActions
): AnimalsState {
  switch (action.type) {
    case AnimalsActionTypes.AnimalSelected: {
      return Object.assign({}, state, { selectedAnimalId: action.payload });
    }

    case AnimalsActionTypes.AnimalsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case AnimalsActionTypes.AnimalAdded: {
      return adapter.addOne(action.payload, state);
    }

    case AnimalsActionTypes.AnimalUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case AnimalsActionTypes.AnimalDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedAnimalId = (state: AnimalsState) =>
  state.selectedAnimalId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectAnimalIds = selectIds;

export const selectAnimalEntities = selectEntities;

export const selectAllAnimals = selectAll;

export const selectAnimalTotal = selectTotal;
