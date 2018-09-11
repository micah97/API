import { Player } from '../../shared/core/player.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {

  @Input() players: Player[];
  @Output() selected = new EventEmitter();

}
