import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'api-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  @Input() currencies;
  @Output() search = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  searchCurr(search) {
    console.log(search, 'VALUE');
    // this.search.emit
  }
}
