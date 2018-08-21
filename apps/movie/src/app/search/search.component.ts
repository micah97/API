import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'api-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'Solo: A Star Wars Story';

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
