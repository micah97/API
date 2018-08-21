import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() selectedAlbum: any;
  @Input() album: any;

  constructor() { }

  ngOnInit() {
  }

}
