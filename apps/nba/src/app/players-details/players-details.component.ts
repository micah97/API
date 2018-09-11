import { FormGroup } from '@angular/forms';
import { Player } from '../../shared/core/player.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss']
})
export class PlayersDetailsComponent {
  originalName: string;
  selected: Player;

  @Input() set selectedPlayer(value: Player) {
    if (value) { this.originalName = value.name; }
    this.selected = Object.assign({}, value);
  }
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  reset() {
    this.group.reset();
    this.selectedPlayer = {} as any;
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
