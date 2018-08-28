import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-comic-search',
  templateUrl: './comic-search.component.html',
  styleUrls: ['./comic-search.component.scss']
})
export class ComicSearchComponent implements OnInit {
  value = 614;

  @Output() search = new EventEmitter();
  @Output() random = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
