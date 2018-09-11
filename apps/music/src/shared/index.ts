import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromInstruments from './state/instruments.reducer';

export interface AppState {
  instruments: fromInstruments.InstrumentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  instruments: fromInstruments.instrumentsReducer
};

export const selectInstrumentInstrumentsState = createFeatureSelector<
  fromInstruments.InstrumentsState
>('instruments');

export const selectInstrumentIds = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentIds
);
export const selectInstrumentEntities = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentEntities
);
export const selectAllInstruments = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectAllInstruments
);
export const selectInstrumentTotal = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentTotal
);
export const selectCurrentInstrumentId = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.getSelectedInstrumentId
);

export const selectCurrentInstrument = createSelector(
  selectInstrumentEntities,
  selectCurrentInstrumentId,
  (instrumentEntities, instrumentId) => {
    const emptyInstrument = {
      id: null,
      name: '',
      year: '',
      inventor: '',
      country: ''
    };
    return instrumentId ? instrumentEntities[instrumentId] : emptyInstrument;
  }
);
