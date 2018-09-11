import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddInstrument,
  DeleteInstrument,
  InstrumentAdded,
  InstrumentDeleted,
  InstrumentsActionTypes,
  InstrumentsLoaded,
  InstrumentUpdated,
  LoadInstruments,
  UpdateInstrument
} from './instruments.actions';
import { Instrument } from '../core/instrument.model';
import { InstrumentsState } from './instruments.reducer';
import { InstrumentsService } from '../core/instrument.service';

@Injectable({ providedIn: 'root' })
export class InstrumentsEffects {
  @Effect()
  effect$ = this.actions$.ofType(InstrumentsActionTypes.InstrumentsAction);

  @Effect()
  loadInstruments$ = this.dataPersistence.fetch(
    InstrumentsActionTypes.LoadInstruments,
    {
      run: (action: LoadInstruments, state: InstrumentsState) => {
        return this.instrumentsService
          .all()
          .pipe(map((res: Instrument[]) => new InstrumentsLoaded(res)));
      },

      onError: (action: LoadInstruments, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  addInstrument$ = this.dataPersistence.pessimisticUpdate(
    InstrumentsActionTypes.AddInstrument,
    {
      run: (action: AddInstrument, state: InstrumentsState) => {
        return this.instrumentsService
          .create(action.payload)
          .pipe(map((res: Instrument) => new InstrumentAdded(res)));
      },

      onError: (action: AddInstrument, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  updateInstrument$ = this.dataPersistence.pessimisticUpdate(
    InstrumentsActionTypes.UpdateInstrument,
    {
      run: (action: UpdateInstrument, state: InstrumentsState) => {
        return this.instrumentsService
          .update(action.payload)
          .pipe(map((res: Instrument) => new InstrumentUpdated(res)));
      },

      onError: (action: UpdateInstrument, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deleteInstrument$ = this.dataPersistence.pessimisticUpdate(
    InstrumentsActionTypes.DeleteInstrument,
    {
      run: (action: DeleteInstrument, state: InstrumentsState) => {
        return this.instrumentsService
          .delete(action.payload)
          .pipe(map(_ => new InstrumentDeleted(action.payload)));
      },

      onError: (action: DeleteInstrument, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<InstrumentsState>,
    private instrumentsService: InstrumentsService
  ) {}
}
