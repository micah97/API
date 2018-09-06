import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddPizza,
  DeletePizza,
  PizzaAdded,
  PizzaDeleted,
  PizzasActionTypes,
  PizzasLoaded,
  PizzaUpdated,
  LoadPizzas,
  UpdatePizza
} from './pizzas.actions';
import { Pizza } from '../core/pizza.model';
import { PizzasState } from './pizzas.reducer';
import { PizzasService } from '../core/pizzas.service';

@Injectable({providedIn: 'root'})
export class PizzasEffects {
  @Effect() effect$ = this.actions$.ofType(PizzasActionTypes.PizzasAction);

  @Effect()
  loadPizzas$ = this.dataPersistence.fetch(PizzasActionTypes.LoadPizzas, {
    run: (action: LoadPizzas, state: PizzasState) => {
      return this.pizzasService.all().pipe(map((res: Pizza[]) => new PizzasLoaded(res)))
    },

    onError: (action: LoadPizzas, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addPizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.AddPizza, {
    run: (action: AddPizza, state: PizzasState) => {
      return this.pizzasService.create(action.payload).pipe(map((res: Pizza) => new PizzaAdded(res)))
    },

    onError: (action: AddPizza, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updatePizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.UpdatePizza, {
    run: (action: UpdatePizza, state: PizzasState) => {
      return this.pizzasService.update(action.payload).pipe(map((res: Pizza) => new PizzaUpdated(res)))
    },

    onError: (action: UpdatePizza, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deletePizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.DeletePizza, {
    run: (action: DeletePizza, state: PizzasState) => {
      return this.pizzasService.delete(action.payload).pipe(map(_ => new PizzaDeleted(action.payload)))
    },

    onError: (action: DeletePizza, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzasState>,
    private pizzasService: PizzasService
  ) {}
}
