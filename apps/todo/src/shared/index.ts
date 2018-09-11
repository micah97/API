import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromTodos from './state/todos.reducers';

export interface AppState {
  todos: fromTodos.TodosState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todosReducer
};

export const selectTodoTodosState = createFeatureSelector<fromTodos.TodosState>(
  'todos'
);

export const selectTodoIds = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoIds
);
export const selectTodoEntities = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoEntities
);
export const selectAllTodos = createSelector(
  selectTodoTodosState,
  fromTodos.selectAllTodos
);
export const selectTodoTotal = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoTotal
);
export const selectCurrentTodoId = createSelector(
  selectTodoTodosState,
  fromTodos.getSelectedTodoId
);

export const selectCurrentTodo = createSelector(
  selectTodoEntities,
  selectCurrentTodoId,
  (todoEntities, todoId) => {
    const emptyTodo = {
      id: null,
      title: '',
      date: new Date(),
      description: '',
      important: false
    };
    return todoId ? todoEntities[todoId] : emptyTodo;
  }
);
