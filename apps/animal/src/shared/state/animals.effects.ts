import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddAnimal,
  DeleteAnimal,
  AnimalAdded,
  AnimalDeleted,
  AnimalsActionTypes,
  AnimalsLoaded,
  AnimalUpdated,
  LoadAnimals,
  UpdateAnimal
} from './animals.actions';
import { Animal } from '../core/animal.model';
import { AnimalsState } from './animals.reducer';
import { AnimalsService } from '../core/animal.service';

@Injectable({ providedIn: 'root' })
export class AnimalsEffects {
  @Effect() effect$ = this.actions$.ofType(AnimalsActionTypes.AnimalsAction);

  @Effect()
  loadAnimals$ = this.dataPersistence.fetch(AnimalsActionTypes.LoadAnimals, {
    run: (action: LoadAnimals, state: AnimalsState) => {
      return this.animalsService
        .all()
        .pipe(map((res: Animal[]) => new AnimalsLoaded(res)));
    },

    onError: (action: LoadAnimals, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.AddAnimal,
    {
      run: (action: AddAnimal, state: AnimalsState) => {
        console.log('TEST');
        return this.animalsService
          .create(action.payload)
          .pipe(map((res: Animal) => new AnimalAdded(res)));
      },

      onError: (action: AddAnimal, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  updateAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.UpdateAnimal,
    {
      run: (action: UpdateAnimal, state: AnimalsState) => {
        return this.animalsService
          .update(action.payload)
          .pipe(map((res: Animal) => new AnimalUpdated(res)));
      },

      onError: (action: UpdateAnimal, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deleteAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.DeleteAnimal,
    {
      run: (action: DeleteAnimal, state: AnimalsState) => {
        return this.animalsService
          .delete(action.payload)
          .pipe(map(_ => new AnimalDeleted(action.payload)));
      },

      onError: (action: DeleteAnimal, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AnimalsState>,
    private animalsService: AnimalsService
  ) {}
}
