import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-config';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

  constructor() { }
  movie!: Movie;

  ngOnInit(): void {
  }

}
