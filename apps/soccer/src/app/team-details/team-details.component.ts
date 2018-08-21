import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  @Input() roster: any;
  @Input() selectedTeam: any;

  constructor() { }

  ngOnInit() {
  }

}
