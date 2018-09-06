import { Action } from '@ngrx/store';
import { Pizza } from '../core/pizza.model';

export enum PizzasActionTypes {
  PizzasAction = '[Pizzas] Action',
  PizzaSelected = '[Pizzas] Selected',
  LoadPizzas = '[Pizzas] Load Data',
  PizzasLoaded = '[Pizzas] Data Loaded',
  AddPizza = '[Pizzas] Add Data',
  PizzaAdded = '[Pizzas] Data Added',
  UpdatePizza = '[Pizzas] Update Data',
  PizzaUpdated = '[Pizzas] Data Updated',
  DeletePizza = '[Pizzas] Delete Data',
  PizzaDeleted = '[Pizzas] Data Deleted'
}

export class Pizzas implements Action {
  readonly type = PizzasActionTypes.PizzasAction;
}

export class PizzaSelected implements Action {
  readonly type = PizzasActionTypes.PizzaSelected;
  constructor(public payload) {}
}

export class LoadPizzas implements Action {
  readonly type = PizzasActionTypes.LoadPizzas;
  constructor() {}
}

export class PizzasLoaded implements Action {
  readonly type = PizzasActionTypes.PizzasLoaded;
  constructor(public payload: Pizza[]) {}
}

export class AddPizza implements Action {
  readonly type = PizzasActionTypes.AddPizza;
  constructor(public payload: Pizza) {}
}

export class PizzaAdded implements Action {
  readonly type = PizzasActionTypes.PizzaAdded;
  constructor(public payload: Pizza) {}
}

export class UpdatePizza implements Action {
  readonly type = PizzasActionTypes.UpdatePizza;
  constructor(public payload: Pizza) {}
}

export class PizzaUpdated implements Action {
  readonly type = PizzasActionTypes.PizzaUpdated;
  constructor(public payload: Pizza) {}
}

export class DeletePizza implements Action {
  readonly type = PizzasActionTypes.DeletePizza;
  constructor(public payload: Pizza) {}
}

export class PizzaDeleted implements Action {
  readonly type = PizzasActionTypes.PizzaDeleted;
  constructor(public payload: Pizza) {}
}

export type PizzasActions = Pizzas
  | PizzaSelected
  | LoadPizzas
  | PizzasLoaded
  | AddPizza
  | PizzaAdded
  | UpdatePizza
  | PizzaUpdated
  | DeletePizza
  | PizzaDeleted
;
