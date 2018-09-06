import { Pizza } from '../../shared/core/pizza.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  @Input() deselect;
  @Input() pizzas: Pizza[];
  @Output() selected = new EventEmitter();

}
