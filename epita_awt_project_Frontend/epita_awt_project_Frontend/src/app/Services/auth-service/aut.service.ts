import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUser, loginUser, rateMovie } from '../const';
import { User } from 'src/app/Model/User';
import { RatingMovies } from 'src/app/Model/movie';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor(private http: HttpClient) { }

  registerUser = (newUser: User) => {
    console.log(`new user is :  ${newUser}`)
    return this.http.post<any>(registerUser, newUser);
  }

  loginUser = (uUser: User) => {
    console.log(`user is :  ${uUser}`)
    return this.http.post(loginUser, uUser);
  }

  rateMovies = (data) => {
    console.log(`new user is :  ${data}`)
    return this.http.post<any>(rateMovie, data);
  }

}
