import { FormBuilder } from '@angular/forms';
import { Todo } from '../shared/core/todo.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosFacade } from '../shared/state/todos.facade';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  todos$: Observable<Todo[]> = this.todosFacade.allTodos$;
  currentTodo$: Observable<Todo> = this.todosFacade.currentTodo$;

  constructor(private todosFacade: TodosFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.resetCurrentTodo();
    this.todosFacade.loadAll();
    this.todosFacade.mutations$.subscribe(_ => this.resetCurrentTodo());
  }

  resetCurrentTodo() {
    this.selectTodo({ id: null });
  }

  selectTodo(todo) {
    console.log(todo, 'TODO');
    this.form.patchValue(todo);
    this.todosFacade.selectTodo(todo.id);
  }

  saveTodo(todo) {
    if (!todo.id) {
      this.todosFacade.addTodo(todo);
    } else {
      this.todosFacade.updateTodo(todo);
    }
  }

  deleteTodo(todo) {
    this.todosFacade.deleteTodo(todo);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      date: [''],
      title: [''],
      important: [''],
      description: ['']
    });
  }
}
