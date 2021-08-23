import { Component, OnInit, Input } from '@angular/core';
import { SimMovies } from '../movie-config';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { Similar } from '../similar';
@Component({
  selector: 'movies-similar',
  templateUrl: './movies-similar.component.html',
  styleUrls: ['./movies-similar.component.less']
})
export class MovieSimilarComponent implements OnInit {

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

   public similar: Similar[] = [];


  ngOnInit(): void {
    this.getSimilar();
  }

  getSimilar(): void {
    this.similar = this.movieService.getSimMovies();
  }

 /*  getSimilarMov(movie_id: any): void {
    this.movieService.getSimilarMovies(movie_id).subscribe(
      (simMovies: SimMovies) => { this.similar = simMovies});
  } */
}
