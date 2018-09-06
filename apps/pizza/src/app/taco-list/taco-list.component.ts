import { Taco } from '../../shared/core/taco.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-taco-list',
  templateUrl: './taco-list.component.html',
  styleUrls: ['./taco-list.component.scss']
})
export class TacoListComponent implements OnInit {
  selectedTaco: Taco;

  @Input() tacos: Taco[];
  @Output() selected = new EventEmitter();

  ngOnInit() {}

  selectTaco(taco) {
    this.selectedTaco = taco;
    this.selected.emit(taco);
  }
}
