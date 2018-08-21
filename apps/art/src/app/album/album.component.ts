import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'api-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album: any;
  albums: any;
  artist: any;
  selectedAlbum: any;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    this.albumService.getArtist()
      .subscribe(res => {
        this.artist = res;
    })
  }

  getAlbums() {
    this.albumService.getArtistAlbums()
      .subscribe((res: any) => {
        this.albums = res.items;
        console.log(this.albums, 'ALBUMS');
      })
  }

  selectAlbum(album) {
    this.selectedAlbum = album;
    this.albumService.getAlbumTracks(this.selectedAlbum.id)
      .subscribe((res: any) => {
        this.album = res.items;
      });
  }
}
