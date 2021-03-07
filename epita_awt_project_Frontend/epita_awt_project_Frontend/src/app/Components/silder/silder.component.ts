import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie-service/movie.service';

import { Movies } from '../../Model/movie';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.scss']
})
export class SilderComponent implements OnInit {
  @Input() sliderConfig;
  @Input() movies: Movies;
  @Input() title: string;
  @Input() UserId:string

  wait = true

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getlatestMovies();

  }

  showMovieDetails(movieTitle, UserId) {
    this.router.navigate(['/movieDetails', movieTitle, UserId]);
  }


}
