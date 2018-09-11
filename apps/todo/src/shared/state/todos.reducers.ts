import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '../core/todo.model';

import { TodosActions, TodosActionTypes } from './todos.actions';

export interface TodosState extends EntityState<Todo> {
  selectedTodoId: string | null;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
export const initialState: TodosState = adapter.getInitialState({
  selectedTodoId: null
});

export function todosReducer(
  state = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case TodosActionTypes.TodoSelected: {
      return Object.assign({}, state, { selectedTodoId: action.payload });
    }

    case TodosActionTypes.TodosLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case TodosActionTypes.TodoAdded: {
      return adapter.addOne(action.payload, state);
    }

    case TodosActionTypes.TodoUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case TodosActionTypes.TodoDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedTodoId = (state: TodosState) => state.selectedTodoId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectTodoIds = selectIds;

export const selectTodoEntities = selectEntities;

export const selectAllTodos = selectAll;

export const selectTodoTotal = selectTotal;
