import { Action } from '@ngrx/store';
import { Taco } from '../core/taco.model';

// Exporting actions consts
export enum TacosActionTypes {
  TacosAction = '[Tacos] Action',
  TacoSelected = '[Tacos] Selected',
  LoadTacos = '[Tacos] Load Data',
  TacosLoaded = '[Tacos] Data Loaded',
  AddTaco = '[Tacos] Add Data',
  TacoAdded = '[Tacos] Data Added',
  UpdateTaco = '[Tacos] Update Data',
  TacoUpdated = '[Tacos] Data Updated',
  DeleteTaco = '[Tacos] Delete Data',
  TacoDeleted = '[Tacos] Data Deleted'
}

export class Tacos implements Action {
  readonly type = TacosActionTypes.TacosAction;
}

export class TacoSelected implements Action {
  readonly type = TacosActionTypes.TacoSelected;
  constructor(public payload) {}
}

export class LoadTacos implements Action {
  readonly type = TacosActionTypes.LoadTacos;
  constructor() {}
}

export class TacosLoaded implements Action {
  readonly type = TacosActionTypes.TacosLoaded;
  constructor(public payload: Taco[]) {}
}

export class AddTaco implements Action {
  readonly type = TacosActionTypes.AddTaco;
  constructor(public payload: Taco) {}
}

export class TacoAdded implements Action {
  readonly type = TacosActionTypes.TacoAdded;
  constructor(public payload: Taco) {}
}

export class UpdateTaco implements Action {
  readonly type = TacosActionTypes.UpdateTaco;
  constructor(public payload: Taco) {}
}

export class TacoUpdated implements Action {
  readonly type = TacosActionTypes.TacoUpdated;
  constructor(public payload: Taco) {}
}

export class DeleteTaco implements Action {
  readonly type = TacosActionTypes.DeleteTaco;
  constructor(public payload: Taco) {}
}

export class TacoDeleted implements Action {
  readonly type = TacosActionTypes.TacoDeleted;
  constructor(public payload: Taco) {}
}

export type TacosActions = Tacos
  | TacoSelected
  | LoadTacos
  | TacosLoaded
  | AddTaco
  | TacoAdded
  | UpdateTaco
  | TacoUpdated
  | DeleteTaco
  | TacoDeleted
;
