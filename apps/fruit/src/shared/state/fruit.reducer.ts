import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Fruit } from '../core/fruit.model';

import { FruitsActions, FruitsActionTypes } from './fruit.actions';

export interface FruitsState extends EntityState<Fruit> {
  selectedFruitId: string | null;
}

export const adapter: EntityAdapter<Fruit> = createEntityAdapter<Fruit>();
export const initialState: FruitsState = adapter.getInitialState({
  selectedFruitId: null
});

export function fruitsReducer(
  state = initialState,
  action: FruitsActions
): FruitsState {
  switch (action.type) {
    case FruitsActionTypes.FruitSelected: {
      return Object.assign({}, state, { selectedFruitId: action.payload });
    }

    case FruitsActionTypes.FruitsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case FruitsActionTypes.FruitAdded: {
      return adapter.addOne(action.payload, state);
    }

    case FruitsActionTypes.FruitUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case FruitsActionTypes.FruitDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedFruitId = (state: FruitsState) =>
  state.selectedFruitId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectFruitIds = selectIds;

export const selectFruitEntities = selectEntities;

export const selectAllFruits = selectAll;

export const selectFruitTotal = selectTotal;
