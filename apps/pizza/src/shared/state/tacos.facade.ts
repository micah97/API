import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TacosState } from './tacos.reducer';
import * as TacosActions from './tacos.actions';
import { TacosActionTypes } from './tacos.actions';
import { selectAllTacos, selectCurrentTaco } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TacosFacade {
  allTacos$ = this.store.pipe(select(selectAllTacos));
  currentTaco$ = this.store.pipe(select(selectCurrentTaco));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === TacosActionTypes.AddTaco
        || action.type === TacosActionTypes.UpdateTaco
        || action.type === TacosActionTypes.DeleteTaco
      )
    );

  constructor(private store: Store<TacosState>, private actions$: ActionsSubject) {}

  selectTaco(tacoId) {
    this.store.dispatch(new TacosActions.TacoSelected(tacoId));
  }

  loadAll() {
    this.store.dispatch(new TacosActions.LoadTacos());
  }

  addTaco(taco) {
    this.store.dispatch(new TacosActions.AddTaco(taco));
  }

  updateTaco(taco) {
    this.store.dispatch(new TacosActions.UpdateTaco(taco));
  }

  deleteTaco(taco) {
    this.store.dispatch(new TacosActions.DeleteTaco(taco));
  }
}
