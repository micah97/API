import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Player } from '../core/player.model';

import { PlayersActions, PlayersActionTypes } from './player.actions';

export interface PlayersState extends EntityState<Player> {
  selectedPlayerId: string | null;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
export const initialState: PlayersState = adapter.getInitialState({
  selectedPlayerId: null
});

export function playersReducer(
  state = initialState,
  action: PlayersActions
): PlayersState {
  switch (action.type) {
    case PlayersActionTypes.PlayerSelected: {
      return Object.assign({}, state, { selectedPlayerId: action.payload });
    }

    case PlayersActionTypes.PlayersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case PlayersActionTypes.PlayerAdded: {
      return adapter.addOne(action.payload, state);
    }

    case PlayersActionTypes.PlayerUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case PlayersActionTypes.PlayerDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedPlayerId = (state: PlayersState) =>
  state.selectedPlayerId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectPlayerIds = selectIds;

export const selectPlayerEntities = selectEntities;

export const selectAllPlayers = selectAll;

export const selectPlayerTotal = selectTotal;
