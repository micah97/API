import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PizzasState } from './pizzas.reducer';
import * as PizzasActions from './pizzas.actions';
import { PizzasActionTypes } from './pizzas.actions';
import { selectAllPizzas, selectCurrentPizza } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PizzasFacade {
  allPizzas$ = this.store.pipe(select(selectAllPizzas));
  currentPizza$ = this.store.pipe(select(selectCurrentPizza));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === PizzasActionTypes.AddPizza
        || action.type === PizzasActionTypes.UpdatePizza
        || action.type === PizzasActionTypes.DeletePizza
      )
    );

  constructor(private store: Store<PizzasState>, private actions$: ActionsSubject) {}

  selectPizza(pizzaId) {
    this.store.dispatch(new PizzasActions.PizzaSelected(pizzaId));
  }

  loadAll() {
    this.store.dispatch(new PizzasActions.LoadPizzas());
  }

  addPizza(pizza) {
    this.store.dispatch(new PizzasActions.AddPizza(pizza));
  }

  updatePizza(pizza) {
    this.store.dispatch(new PizzasActions.UpdatePizza(pizza));
  }

  deletePizza(pizza) {
    this.store.dispatch(new PizzasActions.DeletePizza(pizza));
  }
}
