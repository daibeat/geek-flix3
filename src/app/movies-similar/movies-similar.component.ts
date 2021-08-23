import { Component, OnInit } from '@angular/core';
import { Movie, MovieResults } from '../movie-config';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'movies-similar',
  templateUrl: './movies-similar.component.html',
  styleUrls: ['./movies-similar.component.less']
})
export class MovieSimilarComponent implements OnInit {

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  public similarMovies!: Movie[];

  ngOnInit(): void {
    this.getSimilarMov(566220);
  }

  getSimilarMov(movie_id: number): void {
    this.movieService.getSimilarMovies(movie_id).subscribe(
      (pagedMovies: MovieResults) => {
        console.table(pagedMovies)
        this.similarMovies = pagedMovies.results;
      });
  }

}
