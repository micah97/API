import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { InstrumentsState } from './instruments.reducer';
import * as InstrumentsActions from './instruments.actions';
import { InstrumentsActionTypes } from './instruments.actions';
import { selectAllInstruments, selectCurrentInstrument } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsFacade {
  allInstruments$ = this.store.pipe(select(selectAllInstruments));
  currentInstrument$ = this.store.pipe(select(selectCurrentInstrument));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === InstrumentsActionTypes.AddInstrument ||
        action.type === InstrumentsActionTypes.UpdateInstrument ||
        action.type === InstrumentsActionTypes.DeleteInstrument
    )
  );

  constructor(
    private store: Store<InstrumentsState>,
    private actions$: ActionsSubject
  ) {}

  selectInstrument(instrumentId) {
    this.store.dispatch(
      new InstrumentsActions.InstrumentSelected(instrumentId)
    );
  }

  loadAll() {
    this.store.dispatch(new InstrumentsActions.LoadInstruments());
  }

  addInstrument(instrument) {
    this.store.dispatch(new InstrumentsActions.AddInstrument(instrument));
  }

  updateInstrument(instrument) {
    this.store.dispatch(new InstrumentsActions.UpdateInstrument(instrument));
  }

  deleteInstrument(instrument) {
    this.store.dispatch(new InstrumentsActions.DeleteInstrument(instrument));
  }
}
