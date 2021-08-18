import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, MovieResults } from '../movie-config';
@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {
  public movie! : Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesResponse();
  }
  getMoviesResponse(): void {
    this.movieService.getMovies().subscribe(
      (movieResults : MovieResults) => {
      this.movie = movieResults.results;
  });
}
}
