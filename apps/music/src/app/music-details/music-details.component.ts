import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '../../shared/core/instrument.model';

@Component({
  selector: 'api-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent {
  originalName: string;
  selected: Instrument;

  @Input() set selectedInst(value: Instrument) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedInst = {} as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(instrument) {
    this.reset();
    this.saved.emit(instrument);
  }

  delete(instrument) {
    this.reset();
    this.deleted.emit(instrument);
  }
}
