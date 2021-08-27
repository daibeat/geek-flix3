import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieResults } from './movie-config'
import { environment } from 'src/environments/environment.prod';
import { SIMILAR } from './similar-movies';
import { Similar } from './similar';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';  // URL to web API
  private key = environment.apiKey; // Private API key

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //Get a movie from movie database
  getMovies(): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2021-08-16&include_adult=false&include_video=false&page=1`);
  }
  //Get a movie id from movie database
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.key}&language=en-US`);
  }
  //Get similar movies from movie database
  getSimilarMovies(movie_id: number): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${this.baseUrl}/movie/${movie_id}/similar${this.key}&language=en-US`);
  }

  /* getSimMovies(): Similar[] {
    return SIMILAR;
  } */

  
}

