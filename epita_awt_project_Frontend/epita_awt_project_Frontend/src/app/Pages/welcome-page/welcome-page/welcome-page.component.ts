import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movies, LstMovies, SeenMovies } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Services/movie-service/movie.service';

import { netfix_logo, avatar } from '../../../Services/const';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  subs: Subscription[] = [];

  user_name:any;

  sticky = false;
  loadSider = false;

  netflix_image = netfix_logo;
  avatar = avatar;
  favorate: SeenMovies;
  latest: LstMovies;
  Recom: Movies;
  headerBGUrl;
  headerBGTitle;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
  }

  @ViewChild('stickyHeader') header: ElementRef;

  constructor(private movieService: MovieService,private router: Router) {
   // console.log(this.router.getCurrentNavigation().extras.state.example);
    this.user_name = this.router.getCurrentNavigation().extras.state.example;
   }

  ngOnInit(): void {
    //this.user_name = this.router.getCurrentNavigation().extras.state.example;
    //console.log(this.router.getCurrentNavigation().extras.state.example);
    let tstFav;
    this.subs.push(
      this.movieService.getlatestMovies().subscribe(
        (data) => {
          this.latest = data; console.log(`Latest movie are : ${data.poster}`);
         // let headerBG = this.latest.Search[2]
          let headerBG = this.latest
          this.headerBGUrl = headerBG[2].poster;
          this.headerBGTitle = headerBG[2].title

        },
        (error) => console.log(`Error in loding latestMovies is : ${error}`),
        () => {
          console.log(`Latest movies load completed`)
          console.log(`latest is ${this.latest.poster}`)
          this.loadSider = true;
        }
      )
    );
    this.subs.push(
      this.movieService.getFavorateMovies(this.user_name).subscribe(
        (data) => {
          console.log(`Latest seen movies2 are : ${data[0].rating}`);
          this.favorate = data; console.log(`Latest seen movies2 are : ${data.rating}`);
        },
        (error) => console.log(`Error in loding FavorateMovies is : ${error}`),
        () => console.log(`seen movies load completed`)
      )
    );

    this.subs.push(
      this.movieService.getRecomMovies().subscribe(
        data => this.Recom = data,

        (error) => console.log(`Error in loding FavorateMovies is : ${error}`),
        () => console.log(`Favorate movies load completed`)
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windoScroll = window.pageYOffset;

    if (windoScroll > this.header.nativeElement.offsetHeight) {
      this.sticky = true
    }
    else {
      this.sticky = false;
    }
  }
}
