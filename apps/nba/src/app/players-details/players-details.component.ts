import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss']
})
export class PlayersDetailsComponent implements OnInit {

  @Input() teams: any;
  @Input() positions: any;
  @Input() group: FormGroup;
  @Input() selectedPlayer: any;
  @Output() saved = new EventEmitter;
  @Output() deleted = new EventEmitter;
  @Output() cancelled = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.group.reset();
    this.selectedPlayer = { } as any;
  }

  cancel() {
    this.reset();
    this.cancelled.emit();
  }

  save(player) {
    this.reset();
    this.saved.emit(player);
  }

  delete(player) {
    this.reset();
    this.deleted.emit(player);
  }
}
