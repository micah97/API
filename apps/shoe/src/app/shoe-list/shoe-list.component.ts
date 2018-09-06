import { Shoe } from '../../shared/core/shoe.model';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.scss']
})
export class ShoeListComponent {

  @Input() shoes: Shoe[];
  @Output() selected = new EventEmitter();

}
