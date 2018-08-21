import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'api-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  @Input() albums: any;
  @Output() select = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
