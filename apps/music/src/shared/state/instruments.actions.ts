import { Action } from '@ngrx/store';
import { Instrument } from '../core/instrument.model';

export enum InstrumentsActionTypes {
  InstrumentsAction = '[Instruments] Action',
  InstrumentSelected = '[Instruments] Selected',
  LoadInstruments = '[Instruments] Load Data',
  InstrumentsLoaded = '[Instruments] Data Loaded',
  AddInstrument = '[Instruments] Add Data',
  InstrumentAdded = '[Instruments] Data Added',
  UpdateInstrument = '[Instruments] Update Data',
  InstrumentUpdated = '[Instruments] Data Updated',
  DeleteInstrument = '[Instruments] Delete Data',
  InstrumentDeleted = '[Instruments] Data Deleted'
}

export class Instruments implements Action {
  readonly type = InstrumentsActionTypes.InstrumentsAction;
}

export class InstrumentSelected implements Action {
  readonly type = InstrumentsActionTypes.InstrumentSelected;
  constructor(public payload) {}
}

export class LoadInstruments implements Action {
  readonly type = InstrumentsActionTypes.LoadInstruments;
  constructor() {}
}

export class InstrumentsLoaded implements Action {
  readonly type = InstrumentsActionTypes.InstrumentsLoaded;
  constructor(public payload: Instrument[]) {}
}

export class AddInstrument implements Action {
  readonly type = InstrumentsActionTypes.AddInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentAdded implements Action {
  readonly type = InstrumentsActionTypes.InstrumentAdded;
  constructor(public payload: Instrument) {}
}

export class UpdateInstrument implements Action {
  readonly type = InstrumentsActionTypes.UpdateInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentUpdated implements Action {
  readonly type = InstrumentsActionTypes.InstrumentUpdated;
  constructor(public payload: Instrument) {}
}

export class DeleteInstrument implements Action {
  readonly type = InstrumentsActionTypes.DeleteInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentDeleted implements Action {
  readonly type = InstrumentsActionTypes.InstrumentDeleted;
  constructor(public payload: Instrument) {}
}

export type InstrumentsActions =
  | Instruments
  | InstrumentSelected
  | LoadInstruments
  | InstrumentsLoaded
  | AddInstrument
  | InstrumentAdded
  | UpdateInstrument
  | InstrumentUpdated
  | DeleteInstrument
  | InstrumentDeleted;
