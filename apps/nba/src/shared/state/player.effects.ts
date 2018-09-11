import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddPlayer,
  DeletePlayer,
  PlayerAdded,
  PlayerDeleted,
  PlayersActionTypes,
  PlayersLoaded,
  PlayerUpdated,
  LoadPlayers,
  UpdatePlayer
} from './player.actions';
import { Player } from '../core/player.model';
import { PlayersState } from './player.reducer';
import { PlayerService } from '../core/player.service';

@Injectable({ providedIn: 'root' })
export class PlayersEffects {
  @Effect() effect$ = this.actions$.ofType(PlayersActionTypes.PlayersAction);

  @Effect()
  loadPlayers$ = this.dataPersistence.fetch(PlayersActionTypes.LoadPlayers, {
    run: (action: LoadPlayers, state: PlayersState) => {
      return this.playersService
        .all()
        .pipe(map((res: Player[]) => new PlayersLoaded(res)));
    },

    onError: (action: LoadPlayers, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addPlayer$ = this.dataPersistence.pessimisticUpdate(
    PlayersActionTypes.AddPlayer,
    {
      run: (action: AddPlayer, state: PlayersState) => {
        return this.playersService
          .create(action.payload)
          .pipe(map((res: Player) => new PlayerAdded(res)));
      },

      onError: (action: AddPlayer, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  updatePlayer$ = this.dataPersistence.pessimisticUpdate(
    PlayersActionTypes.UpdatePlayer,
    {
      run: (action: UpdatePlayer, state: PlayersState) => {
        return this.playersService
          .update(action.payload)
          .pipe(map((res: Player) => new PlayerUpdated(res)));
      },

      onError: (action: UpdatePlayer, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deletePlayer$ = this.dataPersistence.pessimisticUpdate(
    PlayersActionTypes.DeletePlayer,
    {
      run: (action: DeletePlayer, state: PlayersState) => {
        return this.playersService
          .delete(action.payload)
          .pipe(map(_ => new PlayerDeleted(action.payload)));
      },

      onError: (action: DeletePlayer, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PlayersState>,
    private playersService: PlayerService
  ) {}
}
