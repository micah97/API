import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromFruits from './state/fruit.reducer';

export interface AppState {
  fruits: fromFruits.FruitsState;
}

export const reducers: ActionReducerMap<AppState> = {
  fruits: fromFruits.fruitsReducer
};

export const selectFruitFruitsState = createFeatureSelector<
  fromFruits.FruitsState
>('fruits');

export const selectFruitIds = createSelector(
  selectFruitFruitsState,
  fromFruits.selectFruitIds
);
export const selectFruitEntities = createSelector(
  selectFruitFruitsState,
  fromFruits.selectFruitEntities
);
export const selectAllFruits = createSelector(
  selectFruitFruitsState,
  fromFruits.selectAllFruits
);
export const selectFruitTotal = createSelector(
  selectFruitFruitsState,
  fromFruits.selectFruitTotal
);
export const selectCurrentFruitId = createSelector(
  selectFruitFruitsState,
  fromFruits.getSelectedFruitId
);

export const selectCurrentFruit = createSelector(
  selectFruitEntities,
  selectCurrentFruitId,
  (fruitEntities, fruitId) => {
    const emptyFruit = {
      id: null,
      name: '',
      calories: 0,
      carbohydrates: 0,
      sugar: 0
    };
    return fruitId ? fruitEntities[fruitId] : emptyFruit;
  }
);
