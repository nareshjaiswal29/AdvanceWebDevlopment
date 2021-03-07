import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie-service/movie.service';

import { Movies } from '../../Model/movie';

@Component({
  selector: 'app-seen-slider',
  templateUrl: './seen-slider.component.html',
  styleUrls: ['./seen-slider.component.scss']
})
export class SeenSliderComponent implements OnInit {
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
