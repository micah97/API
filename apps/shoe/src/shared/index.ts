import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromShoes from './state/shoes.reducer';

export interface AppState {
  shoes: fromShoes.ShoesState
}

export const reducers: ActionReducerMap<AppState> = {
  shoes: fromShoes.shoesReducer
};

export const selectShoeShoesState = createFeatureSelector<fromShoes.ShoesState>('shoes');

export const selectShoeIds = createSelector(
  selectShoeShoesState,
  fromShoes.selectShoeIds
);
export const selectShoeEntities = createSelector(
  selectShoeShoesState,
  fromShoes.selectShoeEntities
);
export const selectAllShoes = createSelector(
  selectShoeShoesState,
  fromShoes.selectAllShoes
);
export const selectShoeTotal = createSelector(
  selectShoeShoesState,
  fromShoes.selectShoeTotal
);
export const selectCurrentShoeId = createSelector(
  selectShoeShoesState,
  fromShoes.getSelectedShoeId
);

export const selectCurrentShoe = createSelector(
  selectShoeEntities,
  selectCurrentShoeId,
  (shoeEntities, shoeId) => {
    const emptyShoe = { id: null, name: '', price: 0, maker: '', release: 0 };
    return shoeId ? shoeEntities[shoeId] : emptyShoe;
  }
);
