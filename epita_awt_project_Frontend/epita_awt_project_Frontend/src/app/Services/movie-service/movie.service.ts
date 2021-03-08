import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { latestMovies, favorateMovies, movieDeatils, apikey, SeenFavMovies, movieApiDeatils } from '../const';
import { MovieEntity, Movies, LstMovies, SeenMovies, DetailsMovieEntity } from '../../Model/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getlatestMovies(): Observable<LstMovies> {
    return this.http.get<LstMovies>(latestMovies)
  }

  getFavorateMovies(userid): Observable<SeenMovies> {
    return this.http.get<SeenMovies>(SeenFavMovies + "/" + userid)
  }
  getRecomMovies(): Observable<Movies> {
    return this.http.get<Movies>(favorateMovies)
  }

  getMovieDetails(movieTitle) {
   // return this.http.get<MovieEntity>(movieDeatils + movieTitle + "&apikey=" + apikey);
   console.log(movieDeatils + "/" + movieTitle)
   return this.http.get<DetailsMovieEntity>(movieDeatils + "/" + movieTitle);
  }
  getRecomMovieDetails(movieTitle) {
    // return this.http.get<MovieEntity>(movieDeatils + movieTitle + "&apikey=" + apikey);
    console.log(movieDeatils + "/" + movieTitle)
    return this.http.get<MovieEntity>(movieApiDeatils + movieTitle + "&apikey=" + apikey);
   }
}
