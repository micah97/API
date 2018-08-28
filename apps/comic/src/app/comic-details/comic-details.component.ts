import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {
  @Input() comic: any;

  constructor() {}

  ngOnInit() {}
}
