import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PlayersState } from './player.reducer';
import * as PlayersActions from './player.actions';
import { PlayersActionTypes } from './player.actions';
import { selectAllPlayers, selectCurrentPlayer } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PlayersFacade {
  allPlayers$ = this.store.pipe(select(selectAllPlayers));
  currentPlayer$ = this.store.pipe(select(selectCurrentPlayer));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === PlayersActionTypes.AddPlayer ||
        action.type === PlayersActionTypes.UpdatePlayer ||
        action.type === PlayersActionTypes.DeletePlayer
    )
  );

  constructor(
    private store: Store<PlayersState>,
    private actions$: ActionsSubject
  ) {}

  selectPlayer(playerId) {
    this.store.dispatch(new PlayersActions.PlayerSelected(playerId));
  }

  loadAll() {
    this.store.dispatch(new PlayersActions.LoadPlayers());
  }

  addPlayer(player) {
    this.store.dispatch(new PlayersActions.AddPlayer(player));
  }

  updatePlayer(player) {
    this.store.dispatch(new PlayersActions.UpdatePlayer(player));
  }

  deletePlayer(player) {
    this.store.dispatch(new PlayersActions.DeletePlayer(player));
  }
}
