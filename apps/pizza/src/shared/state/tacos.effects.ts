import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddTaco,
  DeleteTaco,
  TacoAdded,
  TacoDeleted,
  TacosActionTypes,
  TacosLoaded,
  TacoUpdated,
  LoadTacos,
  UpdateTaco,
} from './tacos.actions';
import { TacosState } from './tacos.reducer';
import { Taco } from '../core/taco.model';
import { TacosService } from '../core/tacos.service';

@Injectable({providedIn: 'root'})
export class TacosEffects {
  @Effect() effect$ = this.actions$.ofType(TacosActionTypes.TacosAction);

  @Effect()
  loadTacos$ = this.dataPersistence.fetch(TacosActionTypes.LoadTacos, {
    run: (action: LoadTacos, state: TacosState) => {
      return this.tacosService.all().pipe(map((res: Taco[]) => new TacosLoaded(res)))
    },

    onError: (action: LoadTacos, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.AddTaco, {
    run: (action: AddTaco, state: TacosState) => {
      return this.tacosService.create(action.payload).pipe(map((res: Taco) => new TacoAdded(res)))
    },

    onError: (action: AddTaco, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.UpdateTaco, {
    run: (action: UpdateTaco, state: TacosState) => {
      return this.tacosService.update(action.payload).pipe(map((res: Taco) => new TacoUpdated(res)))
    },

    onError: (action: UpdateTaco, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.DeleteTaco, {
    run: (action: DeleteTaco, state: TacosState) => {
      return this.tacosService.delete(action.payload).pipe(map(_ => new TacoDeleted(action.payload)))
    },

    onError: (action: DeleteTaco, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacosState>,
    private tacosService: TacosService
  ) {}
}
