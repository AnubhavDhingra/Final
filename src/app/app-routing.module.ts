import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeriesComponent } from './series/series.component';
import { MovieComponent } from './movie/movie.component';
import { MovieformComponent } from './movieform/movieform.component';
import { SeriesformComponent } from './seriesform/seriesform.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodeComponent } from './episode/episode.component';
import { SeasonFormComponent } from './season-form/season-form.component';
import { EpisodeFormComponent } from './episode-form/episode-form.component';
//  import { AuthGuard } from './auth-gaurd';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'movies', component: MovieComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'movieform', component: MovieformComponent},
    {path: 'seriesform', component: SeriesformComponent},
    {path: 'season/:value', component: SeasonsComponent},
    {path: 'episode/:sid/:snumber', component: EpisodeComponent},
    {path: 'seasonform', component: SeasonFormComponent},
    {path: 'episodeform', component: EpisodeFormComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule { }
