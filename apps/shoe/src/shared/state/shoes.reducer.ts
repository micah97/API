import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Shoe } from '../core/shoe.model';

import { ShoesActions, ShoesActionTypes } from './shoes.actions';

export interface ShoesState extends EntityState<Shoe> {
  selectedShoeId: string | null;
}

export const adapter: EntityAdapter<Shoe> = createEntityAdapter<Shoe>();
export const initialState: ShoesState = adapter.getInitialState({
  selectedShoeId: null,
});

export function shoesReducer(state = initialState, action: ShoesActions): ShoesState {
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

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectShoeIds = selectIds;

export const selectShoeEntities = selectEntities;

export const selectAllShoes = selectAll;

export const selectShoeTotal = selectTotal;
