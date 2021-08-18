import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, MovieResults } from '../movie-config';

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.less']
})
export class MoviesContainerComponent implements OnInit {
    public movie! : Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {}
  
  getMoviesResponse(): void {
    this.movieService.getMovies().subscribe(
      (movieResults : MovieResults) => {
      this.movie = movieResults.results;
  });
}
}
