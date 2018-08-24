import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() selectedInst: any;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  reset() {
    this.selectedInst = false;
    this.group.reset();
  }

  cancel() {
    this.cancelled.emit();
    this.reset();
  }

  save(inst) {
    this.saved.emit(inst);
    this.reset();
  }

  delete(inst) {
    this.deleted.emit(inst);
    this.reset();
  }
}
