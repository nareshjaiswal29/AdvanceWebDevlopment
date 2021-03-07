import { Component, OnInit } from '@angular/core';
import { netfix_logo, netflix_background } from '../../Services/const';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

  netflix_background = netflix_background;
  netflix_logo = netfix_logo;

  isRegesterd: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  isRegesterdsetter() {
    console.log("Testing Child to parrent")
    this.isRegesterd = !this.isRegesterd;
  }

}