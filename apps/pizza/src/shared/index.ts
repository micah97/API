import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPizzas from './state/pizzas.reducer';
import * as fromTacos from './state/tacos.reducer';


export interface AppState {
  pizzas: fromPizzas.PizzasState,
  tacos: fromTacos.TacosState
}

export const reducers: ActionReducerMap<AppState> = {
  pizzas: fromPizzas.PizzasReducer,
  tacos: fromTacos.TacosReducer
};

export const selectPizzaPizzasState = createFeatureSelector<fromPizzas.PizzasState>('pizzas');

export const selectPizzaIds = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaIds
);
export const selectPizzaEntities = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaEntities
);
export const selectAllPizzas = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectAllPizzas
);
export const selectPizzaTotal = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaTotal
);
export const selectCurrentPizzaId = createSelector(
  selectPizzaPizzasState,
  fromPizzas.getSelectedPizzaId
);

export const selectCurrentPizza = createSelector(
  selectPizzaEntities,
  selectCurrentPizzaId,
  (pizzaEntities, pizzaId) => {
    const emptyPizza = { id: null, name: '', calories: 0, mainTopping: '', secondaryTopping: '' };
    return pizzaId ? pizzaEntities[pizzaId] : emptyPizza;
  }
);

export const selectTacoTacosState = createFeatureSelector<fromTacos.TacosState>('tacos');

export const selectTacoIds = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoIds
);
export const selectTacoEntities = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoEntities
);
export const selectAllTacos = createSelector(
  selectTacoTacosState,
  fromTacos.selectAllTacos
);
export const selectTacoTotal = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoTotal
);
export const selectCurrentTacoId = createSelector(
  selectTacoTacosState,
  fromTacos.getSelectedTacoId
);

export const selectCurrentTaco = createSelector(
  selectTacoEntities,
  selectCurrentTacoId,
  (tacoEntities, tacoId) => {
    const emptyTaco = { id: null, name: '', calories: 0, protein: '', salsa: '' };
    return tacoId ? tacoEntities[tacoId] : emptyTaco;
  }
);
