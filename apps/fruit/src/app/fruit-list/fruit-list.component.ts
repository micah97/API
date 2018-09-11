import { Fruit } from '../../shared/core/fruit.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {

  @Input() fruits: Fruit[];
  @Output() selected = new EventEmitter();

}
