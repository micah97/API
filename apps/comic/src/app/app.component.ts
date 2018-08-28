import { ComicService } from './comic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comic;

  constructor(private comicService: ComicService) {}

  ngOnInit() {}

  randomComic() {
    this.comicService.getRandomComic().subscribe(res => {
      this.comic = res;
      console.log(this.comic, 'COMIC');
    });
  }

  searchComic(id) {
    this.comicService.getComicById(id).subscribe(res => {
      this.comic = res;
      console.log(this.comic, 'SEARCHED COMIC');
    });
  }
}
