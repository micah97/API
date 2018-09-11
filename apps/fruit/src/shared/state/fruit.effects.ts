import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddFruit,
  DeleteFruit,
  FruitAdded,
  FruitDeleted,
  FruitsActionTypes,
  FruitsLoaded,
  FruitUpdated,
  LoadFruits,
  UpdateFruit
} from './fruit.actions';
import { Fruit } from '../core/fruit.model';
import { FruitsState } from './fruit.reducer';
import { FruitService } from '../core/fruit.service';

@Injectable({ providedIn: 'root' })
export class FruitsEffects {
  @Effect() effect$ = this.actions$.ofType(FruitsActionTypes.FruitsAction);

  @Effect()
  loadFruits$ = this.dataPersistence.fetch(FruitsActionTypes.LoadFruits, {
    run: (action: LoadFruits, state: FruitsState) => {
      return this.fruitsService
        .all()
        .pipe(map((res: Fruit[]) => new FruitsLoaded(res)));
    },

    onError: (action: LoadFruits, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addFruit$ = this.dataPersistence.pessimisticUpdate(
    FruitsActionTypes.AddFruit,
    {
      run: (action: AddFruit, state: FruitsState) => {
        return this.fruitsService
          .create(action.payload)
          .pipe(map((res: Fruit) => new FruitAdded(res)));
      },

      onError: (action: AddFruit, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  updateFruit$ = this.dataPersistence.pessimisticUpdate(
    FruitsActionTypes.UpdateFruit,
    {
      run: (action: UpdateFruit, state: FruitsState) => {
        return this.fruitsService
          .update(action.payload)
          .pipe(map((res: Fruit) => new FruitUpdated(res)));
      },

      onError: (action: UpdateFruit, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deleteFruit$ = this.dataPersistence.pessimisticUpdate(
    FruitsActionTypes.DeleteFruit,
    {
      run: (action: DeleteFruit, state: FruitsState) => {
        return this.fruitsService
          .delete(action.payload)
          .pipe(map(_ => new FruitDeleted(action.payload)));
      },

      onError: (action: DeleteFruit, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FruitsState>,
    private fruitsService: FruitService
  ) {}
}
