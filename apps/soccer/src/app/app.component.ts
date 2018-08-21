import { SoccerService } from './soccer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private soccerService: SoccerService) { }
  teams: any;
  roster: any;
  selectedTeam: any;

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.soccerService.getLeague()
    .subscribe((res: any) => {
      this.teams = res.teams;
      console.log(this.teams, 'TEAMS');
    })
  }

  getTeamRoster(team) {
    this.selectedTeam = team;
    const url = team._links.players.href;
    this.soccerService.getTeamRoster(url)
    .subscribe((res: any) => {
      this.roster = res.players;
      console.log(this.roster, 'ROSTER')
    })
  }
}
