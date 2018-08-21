import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey = 'ya29.Glv_BXimmrUqTw7oSGjGwDG9gDj1snI2bKU30S1zHWxM-dP-BPw9c2AHW97Nx-grWQt7byGWb2TDCh9gvG8zSSLBPqYmxKh0eRLh2a_ruzayeTsFBwPGdn0OduUA';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PL5Z3IeFefApAGe94k3UiJGM_IHL-jgGfk&fields=etag%2Citems(contentDetails(videoId%2CvideoPublishedAt)%2Cetag%2Cid%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Furl%2Ctitle))%2Ckind&key=${this.apiKey}`);
  }
}
