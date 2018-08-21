import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'api-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() searchedMovie: any;

  constructor() { }

  ngOnInit() {
  }

}
