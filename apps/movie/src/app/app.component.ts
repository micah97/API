import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchedMovie: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovies(movie) {
    this.movieService.getMovie(movie)
    .subscribe(res => {
      this.searchedMovie = res;
      });
  }
}
