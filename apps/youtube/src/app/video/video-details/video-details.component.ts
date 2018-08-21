import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '../../../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'api-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  @Input() selectedVideo: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  setEmbed() {
    if(this.selectedVideo.resourceId.videoId) {
    let url: any = 'https://www.youtube.com/embed/';
    url = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}${this.selectedVideo.resourceId.videoId}`)
      return url
    }
  }
}
