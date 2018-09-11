import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FruitsState } from './fruit.reducer';
import * as FruitsActions from './fruit.actions';
import { FruitsActionTypes } from './fruit.actions';
import { selectAllFruits, selectCurrentFruit } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class FruitsFacade {
  allFruits$ = this.store.pipe(select(selectAllFruits));
  currentFruit$ = this.store.pipe(select(selectCurrentFruit));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === FruitsActionTypes.AddFruit ||
        action.type === FruitsActionTypes.UpdateFruit ||
        action.type === FruitsActionTypes.DeleteFruit
    )
  );

  constructor(
    private store: Store<FruitsState>,
    private actions$: ActionsSubject
  ) {}

  selectFruit(fruitId) {
    this.store.dispatch(new FruitsActions.FruitSelected(fruitId));
  }

  loadAll() {
    this.store.dispatch(new FruitsActions.LoadFruits());
  }

  addFruit(fruit) {
    this.store.dispatch(new FruitsActions.AddFruit(fruit));
  }

  updateFruit(fruit) {
    this.store.dispatch(new FruitsActions.UpdateFruit(fruit));
  }

  deleteFruit(fruit) {
    this.store.dispatch(new FruitsActions.DeleteFruit(fruit));
  }
}
