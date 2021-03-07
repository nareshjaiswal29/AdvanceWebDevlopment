import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { User, UserAddress, UserContact } from '../../Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() isRegesterdsetter: EventEmitter<any> = new EventEmitter();

  subs: Subscription[] = [];
  maxDate = new Date();
  //formatDate(birthDate)
  bdate:any;
  registerUserData =
    {
      username: "",
      password: "",
      confirm_password: "",
      getUserData: function (): User {
        return {
          username: this.username,
          pasword: this.password
        }
      }
    }

  registerUserConatct = {
    name: "",
    birthDate: "",
    gender: "",
    email:"",
    //Fdate = formatDate(birthDate)
    
    getUserConatctData: function (): UserContact {
      //this.formatDate(this.birthDate)
      return {
        name: this.name,
        gender: this.gender,
        birthDate: null,
        email: this.email
      }
    }
  }
  registerUserAddress = {
    country: "",
    area: "",
    city: "",
    number: "",
    street:"",
    getUserAddressData: function (): UserAddress {
      return {
        country: this.country,
         area: this.area,
         city: this.city,
         number: this.number,
         street: this.street

      }
    }
  }

  constructor(private auth: AutService) { }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerUserData.password === this.registerUserData.confirm_password) {
      let user = {
        ...this.registerUserData.getUserData(), ...this.registerUserConatct.getUserConatctData(), ...this.registerUserAddress.getUserAddressData()
      }
      console.log(user)
      // ! use below code when calling the api
      // this.subs.push(
       
        this.auth.registerUser(user).subscribe(
          (data) => { console.log(data) },
          (error) => { console.log(error) }
        )
        alert("User Registered Successfully!");
        this.onReset();
     // )
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(sub => sub.unsubscribe())
  }

  signIn(): void {
    this.isRegesterdsetter.emit();
  }

  onReset() {
    this.registerUserData.username = '';
    this.registerUserData.password = '';
    this.registerUserData.confirm_password = '';
    this.registerUserConatct.name= '';
    this.registerUserConatct.birthDate= '';
    this.registerUserConatct.gender= '';
    this.registerUserConatct.email= '';
    this.registerUserAddress.country= '';
    this.registerUserAddress.area= '';
    this.registerUserAddress.city= '';
    this.registerUserAddress.number= '';
    this.registerUserAddress.street= '';
   //form.reset() this.registerUserData.reset();
  }

}