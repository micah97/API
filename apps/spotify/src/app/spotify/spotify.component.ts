import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'api-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }
  value = 'Snarky Puppy';
  album: any;
  albums: any;
  artist: any;
  selectedAlbum: any;

  ngOnInit() {
    this.getArtist();
    this.getArtistAlbum();
  }

  // search(value) {
  //   this.spotifyService.getArtist(value);
  // }

  selectAlbum(album) {
    this.selectedAlbum = album;
    this.spotifyService.getAlbumTracks(this.selectedAlbum.id)
      .subscribe((res: any) => {
        this.album = res.items;
      });
  }

  getArtist() {
    this.spotifyService.getArtist()
    .subscribe(res => {
      this.artist = res;
    })
  }

  getArtistAlbum() {
    this.spotifyService.getArtistAlbums()
    .subscribe((albums: any) => {
      this.albums = albums.items;
    })
  }
}
