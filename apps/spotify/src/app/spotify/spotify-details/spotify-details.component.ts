import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'api-spotify-details',
  templateUrl: './spotify-details.component.html',
  styleUrls: ['./spotify-details.component.css']
})
export class SpotifyDetailsComponent implements OnInit {

  @Input() album: any;
  @Input() selectedAlbum: any;

  constructor() { }

  ngOnInit() {
  }

}
