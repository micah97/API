import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-spotify-album',
  templateUrl: './spotify-album.component.html',
  styleUrls: ['./spotify-album.component.css']
})
export class SpotifyAlbumComponent implements OnInit {

  @Input() albums: any;
  @Output() selectAlbum = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
