import { Action } from '@ngrx/store';
import { Fruit } from '../core/fruit.model';

export enum FruitsActionTypes {
  FruitsAction = '[Fruits] Action',
  FruitSelected = '[Fruits] Selected',
  LoadFruits = '[Fruits] Load Data',
  FruitsLoaded = '[Fruits] Data Loaded',
  AddFruit = '[Fruits] Add Data',
  FruitAdded = '[Fruits] Data Added',
  UpdateFruit = '[Fruits] Update Data',
  FruitUpdated = '[Fruits] Data Updated',
  DeleteFruit = '[Fruits] Delete Data',
  FruitDeleted = '[Fruits] Data Deleted'
}

export class Fruits implements Action {
  readonly type = FruitsActionTypes.FruitsAction;
}

export class FruitSelected implements Action {
  readonly type = FruitsActionTypes.FruitSelected;
  constructor(public payload) {}
}

export class LoadFruits implements Action {
  readonly type = FruitsActionTypes.LoadFruits;
  constructor() {}
}

export class FruitsLoaded implements Action {
  readonly type = FruitsActionTypes.FruitsLoaded;
  constructor(public payload: Fruit[]) {}
}

export class AddFruit implements Action {
  readonly type = FruitsActionTypes.AddFruit;
  constructor(public payload: Fruit) {}
}

export class FruitAdded implements Action {
  readonly type = FruitsActionTypes.FruitAdded;
  constructor(public payload: Fruit) {}
}

export class UpdateFruit implements Action {
  readonly type = FruitsActionTypes.UpdateFruit;
  constructor(public payload: Fruit) {}
}

export class FruitUpdated implements Action {
  readonly type = FruitsActionTypes.FruitUpdated;
  constructor(public payload: Fruit) {}
}

export class DeleteFruit implements Action {
  readonly type = FruitsActionTypes.DeleteFruit;
  constructor(public payload: Fruit) {}
}

export class FruitDeleted implements Action {
  readonly type = FruitsActionTypes.FruitDeleted;
  constructor(public payload: Fruit) {}
}

export type FruitsActions =
  | Fruits
  | FruitSelected
  | LoadFruits
  | FruitsLoaded
  | AddFruit
  | FruitAdded
  | UpdateFruit
  | FruitUpdated
  | DeleteFruit
  | FruitDeleted;
