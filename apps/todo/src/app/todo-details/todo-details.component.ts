import { FormGroup } from '@angular/forms';
import { Todo } from '../../shared/core/todo.model';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  originalName: string;
  selected: Todo;

  @Input()
  set selectedTodo(value: Todo) {
    if (value) {
      this.originalName = value.title;
    }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedTodo = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(todo) {
    this.reset();
    console.log(todo, 'SAVE');
    this.saved.emit(todo);
  }

  delete(todo) {
    this.reset();
    console.log(todo, 'DELETE');
    this.deleted.emit(todo);
  }
}
