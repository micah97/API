import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const client_id = 'a104952a8f814a5e8c88eaaab6108beb';
const client_secret = '8fd770479c7843c9a3455d8f90474530';
const redirect_uri = 'http://localhost:4200/spotify';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  url = 'https://api.spotify.com/v1/'

  constructor(private http: HttpClient) { }

  getArtist() {
    return this.http.get(this.url + 'artists/7ENzCHnmJUr20nUjoZ0zZ1');
  }

  getArtistAlbums() {
    return this.http.get(this.url + 'artists/7ENzCHnmJUr20nUjoZ0zZ1/albums');
  }

  getAlbumTracks(albumId) {
    return this.http.get(this.url + 'albums/' + albumId + '/tracks')
  }

}
