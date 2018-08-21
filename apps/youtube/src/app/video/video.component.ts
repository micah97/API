import { YoutubeService } from './../youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos;
  selectedVideo;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getVideos();
  }

  selectVideo(video) {
    this.selectedVideo = video.snippet;
    console.log(this.selectedVideo, 'SELECTED');
  }

  getVideos() {
    this.youtubeService.getVideos()
    .subscribe((res: any) => {
      this.videos = res.items;
      console.log(this.videos, 'VIDEOS');
    })
  }
}
