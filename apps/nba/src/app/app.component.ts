import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbaService } from './nba.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  teams;
  players;
  positions;
  selectedPlayer;

  form: FormGroup;

  constructor(private nbaService: NbaService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getTeams();
    this.getPlayers();
    this.getPositions();
  }

  selectPlayer(player) {
    this.selectedPlayer = player;
    this.form.patchValue(this.selectedPlayer);
  }

  getPlayers() {
    this.nbaService.getPlayers()
      .subscribe(res => {
        this.players = res;
      })
  }

  getTeams() {
    this.nbaService.getTeams()
      .subscribe(res => {
        this.teams = res;
      })
  }

  getPositions() {
    this.nbaService.getPositions()
      .subscribe(res => {
        this.positions = res;
      })
  }

  cancel() {
    this.selectedPlayer = false;
    this.form.reset();
  }

  save(player) {
    if (this.form.valid) {
      player.id ? this.update(player) : this.create(player);
    }
  }

  update(player) {
    this.nbaService.update(player)
      .subscribe(() => {
        this.form.reset()
        this.getPlayers();
        console.log('Sucessful Update')
      })
  }

  create(player) {
    this.nbaService.create(player)
      .subscribe(() => {
        this.form.reset()
        this.getPlayers();
        console.log('Sucessful Create')
      })
  }

  delete(player) {
    this.nbaService.delete(player)
      .subscribe(() => {
        this.form.reset();
        this.getPlayers();
        console.log('Successful Delete')
      })
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
