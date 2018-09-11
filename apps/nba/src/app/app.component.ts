import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/core/player.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';
import { PlayersFacade } from '../shared/state/player.facade';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: any;
  players$: Observable<Player[]> = this.playersFacade.allPlayers$;
  currentPlayer$: Observable<Player> = this.playersFacade.currentPlayer$;

  constructor(private fb: FormBuilder,
              private playersFacade: PlayersFacade) { }

  ngOnInit() {
    this.initForm();
    this.resetCurrentPlayer();
    this.playersFacade.loadAll();
    this.playersFacade.mutations$.subscribe(_ => this.resetCurrentPlayer());
  }

  resetCurrentPlayer() {
    this.selectPlayer({id: null});
  }

  selectPlayer(player) {
    this.form.patchValue(player);
    this.playersFacade.selectPlayer(player.id);
  }

  savePlayer(player) {
    if (!player.id) {
      this.playersFacade.addPlayer(player);
    } else {
      this.playersFacade.updatePlayer(player);
    }
  }

  deletePlayer(player) {
    this.playersFacade.deletePlayer(player);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      team: [''],
      height: [''],
      number: [''],
      position: ['']
    })
  }
}
