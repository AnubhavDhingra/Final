import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { MovieformComponent } from './movieform/movieform.component';
import { SeriesformComponent } from './seriesform/seriesform.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeFormComponent } from './episode-form/episode-form.component';
import { SeasonFormComponent } from './season-form/season-form.component';
// import {PopupModule} from 'ng2-opd-popup';
// import { AuthGuard } from './auth-gaurd';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    MovieComponent,
    SeriesComponent,
    MovieformComponent,
    SeriesformComponent,
    SeasonsComponent,
    EpisodeComponent,
    EpisodeFormComponent,
    SeasonFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpModule,
    // PopupModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
