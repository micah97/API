import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  player;
  selectedPlayer;

  @Input() players: any;
  @Output() select = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectPlayer(player) {
    this.select.emit(player);
    this.selectedPlayer = player;
  }
}
