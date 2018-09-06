import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Pizza } from '../core/pizza.model';

import { PizzasActions, PizzasActionTypes } from './pizzas.actions';

/**
 * Interface to the part of the Store containing PizzasState
 * and other information related to PizzasData.
 */
export interface PizzasState extends EntityState<Pizza> {
  selectedPizzaId: string | null;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();
export const initialState: PizzasState = adapter.getInitialState({
  // additional entity state properties
  selectedPizzaId: null,
});

export function PizzasReducer(state = initialState, action: PizzasActions): PizzasState {
  switch (action.type) {
    case PizzasActionTypes.PizzaSelected: {
      return Object.assign({}, state, { selectedPizzaId: action.payload });
    }

    case PizzasActionTypes.PizzasLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case PizzasActionTypes.PizzaAdded: {
      return adapter.addOne(action.payload, state);
    }

    case PizzasActionTypes.PizzaUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case PizzasActionTypes.PizzaDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedPizzaId = (state: PizzasState) => state.selectedPizzaId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Pizza ids
export const selectPizzaIds = selectIds;

// select the dictionary of Pizza entities
export const selectPizzaEntities = selectEntities;

// select the array of Pizzas
export const selectAllPizzas = selectAll;

// select the total Pizza count
export const selectPizzaTotal = selectTotal;
