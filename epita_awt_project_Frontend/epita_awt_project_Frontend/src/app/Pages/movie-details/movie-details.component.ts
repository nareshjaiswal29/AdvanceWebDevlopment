import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie-service/movie.service';
import { DetailsMovieEntity, MovieEntity } from '../../Model/movie';

import { netfix_logo } from '../../Services/const';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  subs: Subscription[] = [];
  NewMovieEntity: DetailsMovieEntity;
  netflixLogo = netfix_logo;
  userid:any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }


  ngOnInit(): void {
    this.subs.push(
      this.activeRoute.paramMap.subscribe(
        data => {
          console.log(`Url obtained is : ${data.get('movieTitle')}`);
          console.log(`Url obtained is user id: ${data.get('UserId')}`);
          this.userid = data.get('UserId')
          this.getMovieDetails(data.get('movieTitle'))
        },
        (error) => console.log("error in fetching the rote parameter"),
        () => {
        }
      )
    )

  }

  getMovieDetails(movieTitle: String) {
    console.table(`Movie title is : ${movieTitle}`);
    this.movieService.getMovieDetails(movieTitle).subscribe(
      data => {
        console.table(data);
        this.NewMovieEntity = data;
        console.log(this.NewMovieEntity);
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(s => s.unsubscribe())
  }

  goToWelcomeScreen() {
    this.router.navigate(['/welcome'], { state: { example: this.userid }})
  }

}
