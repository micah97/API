import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url = 'https://api.spotify.com/v1/'

  constructor(private http: HttpClient) { }

  getArtist() {
    return this.http.get(this.url + 'artists/3DtSOCXYU6o4EV0K1NgIKq');
  }

  getArtistAlbums() {
    return this.http.get(this.url + 'artists/3DtSOCXYU6o4EV0K1NgIKq/albums');
  }

  getAlbumTracks(albumId) {
    return this.http.get(this.url + 'albums/' + albumId + '/tracks')
  }

}
