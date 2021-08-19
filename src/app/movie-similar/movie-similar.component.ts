import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieResults, SimMovies } from '../movie-config';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-similar',
  templateUrl: './movie-similar.component.html',
  styleUrls: ['./movie-similar.component.less']
})
export class MovieSimilarComponent implements OnInit {

  constructor(private movieService : MovieService) { }
   public movie! : number[];

  ngOnInit(): void {
   this.getSimilarMov(this.movie);
  }

  getSimilarMov(movie_id: any): void {
    this.movieService.getSimilarMovies(movie_id).subscribe(
(simMovies : SimMovies) => {this.movie = simMovies.movie_id});
}
}
