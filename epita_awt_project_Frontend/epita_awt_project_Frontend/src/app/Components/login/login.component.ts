import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { User } from '../../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() isRegesterdsetter: EventEmitter<any> = new EventEmitter();
  subs: Subscription[] = [];
  loginUserData =
    {
      email: "",
      password: "",
      confirm_password: "",
      getUserData: function (): User {
        return {
          username: this.email,
          pasword: this.password
        }
      }
    }

  constructor(private auth: AutService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
   let current_user;
    //! Use below code in production
      //this.subs.push(
        this.auth.loginUser(this.loginUserData.getUserData()).subscribe(
          (data) => { current_user =  data },
          (error) => { console.log(error) },
          () =>{ 
            console.log(current_user)
            if(current_user.length != 0){
              console.log(current_user[0].username)
            this.router.navigate(['/welcome'], { state: { example: current_user[0].username } })}
            else{
              alert("Please enter correct credentials!")
            }
          }
        )
      //)

    //this.router.navigate(['/welcome']);
  }

  registerData() {
    this.isRegesterdsetter.emit();
  }

}