import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie, MovieResults, SimMovie } from './movie-config'
import { MessageService } from './message.service';
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


  constructor(private http: HttpClient, private messageService: MessageService) { }

  //Get a movie from movie database
  getMovies(): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2021-08-16&include_adult=false&include_video=false&page=1`);
  }
  //Get a movie id from movie database
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.key}&language=en-US`)
      .pipe(catchError(this.handleError<Movie>('getMovie'))
      );
  }

  getSimMovies(): Similar[] {
    return SIMILAR;
  }

  //Get similar movies from movie database
  getSimilarMovies(movie_id: number): Observable<MovieResults> {
    //    const url = (`${this.baseUrl}/movie/${movie_id}/similar${this.key}&language=en-US`)
    const url = `https://api.themoviedb.org/3/movie/566220/similar?api_key=c0f61a094245805aaf98ca9c1be4f5c8&language=en-US`;
    return this.http.get<MovieResults>(url);

  }


  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

