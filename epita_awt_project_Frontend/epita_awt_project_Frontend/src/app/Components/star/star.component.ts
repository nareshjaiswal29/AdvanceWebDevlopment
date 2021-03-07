import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { RatingMovies } from '../../Model/movie';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() movie_title; 
  @Input() user_id;
  @Input() movie_poster;

  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];

  RaingMoviesData =
    {
      rating:"",
      userId: "",
      MovieName: "",
      poster: "",
      getRatingData: function (): RatingMovies {
        return {
          rating:this.rating,
          userId: this.user_id,
          MovieName: this.movie_title,
          poster: this.movie_poster
        }
      }
    }


  constructor(private auth: AutService, private router: Router) {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  getStart(i: number) {
    if (this.rating >= i + 1) {
      return "start";
    }
    else {
      return "star_border"
    }
  }


  onClick(i: number) {
    this.rating = i + 1

    console.log(
      `Movie title is : ${this.movie_title} and userid : ${this.user_id} and url is ${this.movie_poster}`
    )
    const data = {
      rating: this.rating,
      userId: this.user_id,
      MovieName: this.movie_title, 
      poster: this.movie_poster,
      
    };
    console.log(data);
    this.auth.rateMovies(data).subscribe(
      (data) => { console.log(data) },
      (error) => { console.log(error) }
      //() => this.router.navigate(['/welcome'])
    )
    alert("Thankyou for rating this movie!")
  }


}
