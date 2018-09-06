import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-taco-details',
  templateUrl: './taco-details.component.html',
  styleUrls: ['./taco-details.component.scss']
})
export class TacoDetailsComponent implements OnInit {
  @Input() taco;

  constructor() {}

  ngOnInit() {}
}
