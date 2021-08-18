import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie, MovieResults } from './movie-config'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';  // URL to web API
  private key = '?api_key=c0f61a094245805aaf98ca9c1be4f5c8';// Private API key

  constructor(private http: HttpClient) { }

   //Get a movie from movie database
/*   getMovies(): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2021-08-16&include_adult=false&include_video=false&page=1`);
  } */
    //Get a movie from movie database
    getMovies(): Observable<MovieResults> {
      const url = `${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2021-08-16&include_adult=false&include_video=false&page=1`;
      return this.http.get<MovieResults>(url);
    }
    
}
