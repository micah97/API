import { Action } from '@ngrx/store';
import { Shoe } from '../core/shoe.model';

export enum ShoesActionTypes {
  ShoesAction = '[Shoes] Action',
  ShoeSelected = '[Shoes] Selected',
  LoadShoes = '[Shoes] Load Data',
  ShoesLoaded = '[Shoes] Data Loaded',
  AddShoe = '[Shoes] Add Data',
  ShoeAdded = '[Shoes] Data Added',
  UpdateShoe = '[Shoes] Update Data',
  ShoeUpdated = '[Shoes] Data Updated',
  DeleteShoe = '[Shoes] Delete Data',
  ShoeDeleted = '[Shoes] Data Deleted',
}

export class Shoes implements Action {
  readonly type = ShoesActionTypes.ShoesAction;
}

export class ShoeSelected implements Action {
  readonly type = ShoesActionTypes.ShoeSelected;
  constructor(public payload) { }
}

export class LoadShoes implements Action {
  readonly type = ShoesActionTypes.LoadShoes;
  constructor() { }
}

export class ShoesLoaded implements Action {
  readonly type = ShoesActionTypes.ShoesLoaded;
  constructor(public payload: Shoe[]) { }
}

export class AddShoe implements Action {
  readonly type = ShoesActionTypes.AddShoe;
  constructor(public payload: Shoe) { }
}

export class ShoeAdded implements Action {
  readonly type = ShoesActionTypes.ShoeAdded;
  constructor(public payload: Shoe) { }
}

export class UpdateShoe implements Action {
  readonly type = ShoesActionTypes.UpdateShoe;
  constructor(public payload: Shoe) { }
}

export class ShoeUpdated implements Action {
  readonly type = ShoesActionTypes.ShoeUpdated;
  constructor(public payload: Shoe) { }
}

export class DeleteShoe implements Action {
  readonly type = ShoesActionTypes.DeleteShoe;
  constructor(public payload: Shoe) { }
}

export class ShoeDeleted implements Action {
  readonly type = ShoesActionTypes.ShoeDeleted;
  constructor(public payload: Shoe) { }
}

export type ShoesActions = Shoes
  | ShoeSelected
  | LoadShoes
  | ShoesLoaded
  | AddShoe
  | ShoeAdded
  | UpdateShoe
  | ShoeUpdated
  | DeleteShoe
  | ShoeDeleted
;
