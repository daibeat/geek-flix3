import { Component, OnInit, Input } from '@angular/core';
import { SimMovies } from '../movie-config';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
@Component({
  selector: 'movie-similar',
  templateUrl: './movie-similar.component.html',
  styleUrls: ['./movie-similar.component.less']
})
export class MovieSimilarComponent implements OnInit {

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }
    
       public similar!: SimMovies;


  ngOnInit(): void {
    this.getSimilarMov(this.route.snapshot.paramMap.get('movie_id'));
  }

  getSimilarMov(movie_id: any): void {
    this.movieService.getSimilarMovies(movie_id).subscribe(
      (simMovies: SimMovies) => {this.similar = simMovies;});
  }
}
