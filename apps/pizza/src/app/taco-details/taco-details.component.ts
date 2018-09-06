import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Taco } from '../../shared/core/taco.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'api-taco-details',
  templateUrl: './taco-details.component.html',
  styleUrls: ['./taco-details.component.scss']
})
export class TacoDetailsComponent {
  originalName: string;
  selected: Taco;

  @Input() set selectedTaco(value: Taco) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedTaco = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(taco) {
    this.reset();
    this.saved.emit(taco);
  }

  delete(taco) {
    this.reset();
    this.deleted.emit(taco);
  }
}
