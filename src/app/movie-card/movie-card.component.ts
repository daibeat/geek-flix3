import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, MovieResults} from '../movie-config';
import { MessageService } from '../message.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {
  public movie!: Movie[];

  constructor(private movieService: MovieService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMoviesResponse();
  }
  getMoviesResponse(): void {
    this.movieService.getMovies().subscribe(
      (movieResults: MovieResults) => {
        this.movie = movieResults.results;
        this.messageService.add('movie-card component:fetched movies');
      });
  }

}
