import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Shoe } from '../core/shoe.model';

import { ShoesActions, ShoesActionTypes } from './shoes.actions';

/**
 * Interface to the part of the Store containing ShoesState
 * and other information related to ShoesData.
 */
export interface ShoesState extends EntityState<Shoe> {
  selectedShoeId: string | null;
}

export const adapter: EntityAdapter<Shoe> = createEntityAdapter<Shoe>();
export const initialState: ShoesState = adapter.getInitialState({
  // additional entity state properties
  selectedShoeId: null,
});

export function shoesReducer(
  state = initialState,
  action: ShoesActions
): ShoesState {
  switch (action.type) {
    case ShoesActionTypes.ShoeSelected: {
      return Object.assign({}, state, { selectedShoeId: action.payload });
    }

    case ShoesActionTypes.ShoesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case ShoesActionTypes.ShoeAdded: {
      return adapter.addOne(action.payload, state);
    }

    case ShoesActionTypes.ShoeUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case ShoesActionTypes.ShoeDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedShoeId = (state: ShoesState) => state.selectedShoeId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of shoe ids
export const selectShoeIds = selectIds;

// select the dictionary of shoe entities
export const selectShoeEntities = selectEntities;

// select the array of shoes
export const selectAllShoes = selectAll;

// select the total shoe count
export const selectShoeTotal = selectTotal;
