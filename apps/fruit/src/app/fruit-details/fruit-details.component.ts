import { FormGroup } from '@angular/forms';
import { Fruit } from '../../shared/core/fruit.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.scss']
})
export class FruitDetailsComponent {
  originalName: string;
  selected: Fruit;

  @Input() set selectedFruit(value: Fruit) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedFruit = { } as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(fruit) {
    this.reset();
    this.saved.emit(fruit);
  }

  delete(fruit) {
    this.reset();
    this.deleted.emit(fruit);
  }
}
