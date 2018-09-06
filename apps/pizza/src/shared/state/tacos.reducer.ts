import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Taco } from '../core/taco.model';

import { TacosActions, TacosActionTypes } from './tacos.actions';

/**
 * Interface to the part of the Store containing TacosState
 * and other information related to TacosData.
 */
export interface TacosState extends EntityState<Taco> {
  selectedTacoId: string | null;
}

export const adapter: EntityAdapter<Taco> = createEntityAdapter<Taco>();
export const initialState: TacosState = adapter.getInitialState({
  // additional entity state properties
  selectedTacoId: null,
});

export function TacosReducer(state = initialState, action: TacosActions): TacosState {
  switch (action.type) {
    case TacosActionTypes.TacoSelected: {
      return Object.assign({}, state, { selectedTacoId: action.payload });
    }

    case TacosActionTypes.TacosLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case TacosActionTypes.TacoAdded: {
      return adapter.addOne(action.payload, state);
    }

    case TacosActionTypes.TacoUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case TacosActionTypes.TacoDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedTacoId = (state: TacosState) => state.selectedTacoId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Taco ids
export const selectTacoIds = selectIds;

// select the dictionary of Taco entities
export const selectTacoEntities = selectEntities;

// select the array of Tacos
export const selectAllTacos = selectAll;

// select the total Taco count
export const selectTacoTotal = selectTotal;
