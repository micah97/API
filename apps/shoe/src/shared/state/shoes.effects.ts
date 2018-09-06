import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddShoe,
  DeleteShoe,
  ShoeAdded,
  ShoeDeleted,
  ShoesActionTypes,
  ShoesLoaded,
  ShoeUpdated,
  LoadShoes,
  UpdateShoe
} from './shoes.actions';
import { Shoe } from '../core/shoe.model';
import { ShoesState } from './shoes.reducer';
import { ShoesService } from '../core/shoe.service';

@Injectable({providedIn: 'root'})
export class ShoesEffects {
  @Effect() effect$ = this.actions$.ofType(ShoesActionTypes.ShoesAction);

  @Effect()
  loadShoes$ = this.dataPersistence.fetch(ShoesActionTypes.LoadShoes, {
    run: (action: LoadShoes, state: ShoesState) => {
      return this.shoesService.all().pipe(map((res: Shoe[]) => new ShoesLoaded(res)))
    },

    onError: (action: LoadShoes, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addShoe$ = this.dataPersistence.pessimisticUpdate(ShoesActionTypes.AddShoe, {
    run: (action: AddShoe, state: ShoesState) => {
      return this.shoesService.create(action.payload).pipe(map((res: Shoe) => new ShoeAdded(res)))
    },

    onError: (action: AddShoe, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateShoe$ = this.dataPersistence.pessimisticUpdate(ShoesActionTypes.UpdateShoe, {
    run: (action: UpdateShoe, state: ShoesState) => {
      return this.shoesService.update(action.payload).pipe(map((res: Shoe) => new ShoeUpdated(res)))
    },

    onError: (action: UpdateShoe, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteShoe$ = this.dataPersistence.pessimisticUpdate(ShoesActionTypes.DeleteShoe, {
    run: (action: DeleteShoe, state: ShoesState) => {
      return this.shoesService.delete(action.payload).pipe(map(_ => new ShoeDeleted(action.payload)))
    },

    onError: (action: DeleteShoe, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ShoesState>,
    private shoesService: ShoesService
  ) {}
}
