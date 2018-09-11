import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Instrument } from '../core/instrument.model';

import {
  InstrumentsActions,
  InstrumentsActionTypes
} from './instruments.actions';

export interface InstrumentsState extends EntityState<Instrument> {
  selectedInstrumentId: string | null;
}

export const adapter: EntityAdapter<Instrument> = createEntityAdapter<
  Instrument
>();
export const initialState: InstrumentsState = adapter.getInitialState({
  selectedInstrumentId: null
});

export function instrumentsReducer(
  state = initialState,
  action: InstrumentsActions
): InstrumentsState {
  switch (action.type) {
    case InstrumentsActionTypes.InstrumentSelected: {
      return Object.assign({}, state, { selectedInstrumentId: action.payload });
    }

    case InstrumentsActionTypes.InstrumentsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentAdded: {
      return adapter.addOne(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedInstrumentId = (state: InstrumentsState) =>
  state.selectedInstrumentId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectInstrumentIds = selectIds;

export const selectInstrumentEntities = selectEntities;

export const selectAllInstruments = selectAll;

export const selectInstrumentTotal = selectTotal;
