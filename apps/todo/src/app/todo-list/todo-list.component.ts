import { Todo } from '../../shared/core/todo.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'api-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() selected = new EventEmitter();
}
