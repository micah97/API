import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  url = 'https://level-up-api-varwfvewcd.now.sh'
  thing;

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(this.url + '/players')
  }

  getTeams() {
    return this.http.get(this.url + '/teams')
  }

  getPositions() {
    return this.http.get(this.url + '/positions')
  }

  create(player) {
    return this.http.post(this.url + '/players', player)
  }

  update(player) {
    return this.http.put(this.url + '/players/' + player.id, player);
  }

  delete(player) {
    return this.http.delete(this.url + '/players/' + player.id)
  }
}
