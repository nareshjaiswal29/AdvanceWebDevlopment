import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page/welcome-page.component';
import { SilderComponent } from './Components/silder/silder.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { CredentialsComponent } from './Pages/credentials/credentials.component';
import { FormsModule } from '@angular/forms';
import { AutService } from './Services/auth-service/aut.service';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { StarComponent } from './Components/star/star.component';
import { SeenSliderComponent } from './Components/seen-slider/seen-slider.component';
import { RecomSliderComponent } from './Components/recom-slider/recom-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SilderComponent,
    RegisterComponent,
    CredentialsComponent,
    LoginComponent,
    MovieDetailsComponent,
    StarComponent,
    SeenSliderComponent,
    RecomSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
