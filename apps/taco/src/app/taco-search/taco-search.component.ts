import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-taco-search',
  templateUrl: './taco-search.component.html',
  styleUrls: ['./taco-search.component.scss']
})
export class TacoSearchComponent implements OnInit {
  @Output() search = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getTaco() {
    this.search.emit();
  }
}
