import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shoe } from '../../shared/core/shoe.model';

@Component({
  selector: 'api-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.scss']
})
export class ShoeDetailsComponent {
  originalName: string;
  selected: Shoe;

  @Input() set selectedShoe(value: Shoe) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedShoe = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(shoe) {
    this.reset();
    this.saved.emit(shoe);
  }

  delete(shoe) {
    this.reset();
    this.deleted.emit(shoe);
  }
}
