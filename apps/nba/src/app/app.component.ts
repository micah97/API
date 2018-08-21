import { Component, OnInit } from '@angular/core';
import { NbaService } from './nba.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  players: any;

  constructor(private nbaService: NbaService) { }

  ngOnInit() {

  }

  getPlayers() {
    this.nbaService.getPlayers()
      .subscribe(res => {
        this.players = res;
        console.log(this.players, 'PLAYAS');
      })
  }
}
