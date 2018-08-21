import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'California';

  @Output() search = new EventEmitter

  constructor() { }

  ngOnInit() {
  }
}
