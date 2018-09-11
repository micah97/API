import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Todo } from '../core/todo.model';
import { TodoService } from '../core/todo.service';

import {
  AddTodo,
  DeleteTodo,
  TodoAdded,
  TodoDeleted,
  TodosActionTypes,
  TodosLoaded,
  TodoUpdated,
  LoadTodos,
  UpdateTodo
} from './todos.actions';
import { TodosState } from './todos.reducers';

@Injectable({ providedIn: 'root' })
export class TodosEffects {
  @Effect() effect$ = this.actions$.ofType(TodosActionTypes.TodosAction);

  @Effect()
  loadTodos$ = this.dataPersistence.pessimisticUpdate(
    TodosActionTypes.LoadTodos,
    {
      run: (action: LoadTodos, state: TodosState) => {
        return this.todoService
          .all()
          .pipe(map((res: Todo[]) => new TodosLoaded(res)));
      },

      onError: (action: LoadTodos, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deleteTodo$ = this.dataPersistence.pessimisticUpdate(
    TodosActionTypes.DeleteTodo,
    {
      run: (action: DeleteTodo, state: TodosState) => {
        return this.todoService
          .delete(action.payload)
          .pipe(map(_ => new TodoDeleted(action.payload)));
      },

      onError: (action: DeleteTodo, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  UpdateTodo$ = this.dataPersistence.pessimisticUpdate(
    TodosActionTypes.UpdateTodo,
    {
      run: (action: UpdateTodo, state: TodosState) => {
        return this.todoService
          .update(action.payload)
          .pipe(map((res: Todo) => new UpdateTodo(res)));
      },

      onError: (action: UpdateTodo, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  addTodo$ = this.dataPersistence.pessimisticUpdate(TodosActionTypes.AddTodo, {
    run: (action: AddTodo, state: TodosState) => {
      return this.todoService
        .create(action.payload)
        .pipe(map((res: Todo) => new TodoAdded(res)));
    },

    onError: (action: AddTodo, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TodosState>,
    private todoService: TodoService
  ) {}
}
