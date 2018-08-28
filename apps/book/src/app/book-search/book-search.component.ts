import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  value = 'Game of Thrones';

  @Output() search = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
