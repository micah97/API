import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromPlayers from './state/player.reducer';

export interface AppState {
  players: fromPlayers.PlayersState;
}

export const reducers: ActionReducerMap<AppState> = {
  players: fromPlayers.playersReducer
};

export const selectPlayerPlayersState = createFeatureSelector<
  fromPlayers.PlayersState
>('players');

export const selectPlayerIds = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerIds
);
export const selectPlayerEntities = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerEntities
);
export const selectAllPlayers = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectAllPlayers
);
export const selectPlayerTotal = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerTotal
);
export const selectCurrentPlayerId = createSelector(
  selectPlayerPlayersState,
  fromPlayers.getSelectedPlayerId
);

export const selectCurrentPlayer = createSelector(
  selectPlayerEntities,
  selectCurrentPlayerId,
  (playerEntities, playerId) => {
    const emptyPlayer = {
      id: null,
      name: '',
      number: 0,
      team: '',
      height: '',
      position: ''
    };
    return playerId ? playerEntities[playerId] : emptyPlayer;
  }
);
