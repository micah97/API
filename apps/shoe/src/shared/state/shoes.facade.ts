import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ShoesState } from './shoes.reducer';
import * as ShoesActions from './shoes.actions';
import { ShoesActionTypes } from './shoes.actions';
import { selectAllShoes, selectCurrentShoe } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ShoesFacade {
  allShoes$ = this.store.pipe(select(selectAllShoes));
  currentShoe$ = this.store.pipe(select(selectCurrentShoe));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === ShoesActionTypes.AddShoe
        || action.type === ShoesActionTypes.UpdateShoe
        || action.type === ShoesActionTypes.DeleteShoe
      )
    );

  constructor(private store: Store<ShoesState>, private actions$: ActionsSubject) {}

  selectShoe(shoeId) {
    this.store.dispatch(new ShoesActions.ShoeSelected(shoeId));
  }

  loadAll() {
    this.store.dispatch(new ShoesActions.LoadShoes());
  }

  addShoe(shoe) {
    this.store.dispatch(new ShoesActions.AddShoe(shoe));
  }

  updateShoe(shoe) {
    this.store.dispatch(new ShoesActions.UpdateShoe(shoe));
  }

  deleteShoe(shoe) {
    this.store.dispatch(new ShoesActions.DeleteShoe(shoe));
  }
}
