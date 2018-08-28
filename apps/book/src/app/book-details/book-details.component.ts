import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() books: any;

  constructor() { }

  ngOnInit() {
  }

}
