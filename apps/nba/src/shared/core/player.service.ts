import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = 'https://level-up-api-varwfvewcd.now.sh';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.url + '/players');
  }

  load(id) {
    return this.http.get(this.url + '/players/' + id);
  }

  create(player) {
    return this.http.post(this.url + '/players', player);
  }

  update(player) {
    return this.http.put(this.url + '/players/' + player.id, player);
  }

  delete(player) {
    return this.http.delete(this.url + '/players/' + player.id);
  }
}
