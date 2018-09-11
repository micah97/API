import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TodosState } from './todos.reducers';
import * as TodosActions from './todos.actions';
import { TodosActionTypes } from './todos.actions';
import { selectAllTodos, selectCurrentTodo } from '..';
import { ActionsSubject, select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TodosFacade {
  allTodos$ = this.store.pipe(select(selectAllTodos));
  currentTodo$ = this.store.pipe(select(selectCurrentTodo));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === TodosActionTypes.AddTodo ||
        action.type === TodosActionTypes.UpdateTodo ||
        action.type === TodosActionTypes.DeleteTodo
    )
  );

  constructor(
    private store: Store<TodosState>,
    private actions$: ActionsSubject
  ) {}

  selectTodo(todoId) {
    this.store.dispatch(new TodosActions.TodoSelected(todoId));
  }

  loadAll() {
    this.store.dispatch(new TodosActions.LoadTodos());
  }

  addTodo(todo) {
    this.store.dispatch(new TodosActions.AddTodo(todo));
  }

  updateTodo(todo) {
    this.store.dispatch(new TodosActions.UpdateTodo(todo));
  }

  deleteTodo(todo) {
    this.store.dispatch(new TodosActions.DeleteTodo(todo));
  }
}
