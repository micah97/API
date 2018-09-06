import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Pizza } from '../../shared/core/pizza.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'api-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {
  originalName: string;
  selected: Pizza;

  @Input() set selectedPizza(value: Pizza) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedPizza = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(pizza) {
    this.reset();
    // console.log(pizza, 'UPDATE');
    this.saved.emit(pizza);
  }

  delete(pizza) {
    this.reset();
    this.deleted.emit(pizza);
  }
}
