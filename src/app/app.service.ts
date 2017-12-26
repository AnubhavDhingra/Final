import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private isUserLoggedIn; // authtoken
  public username;
  constructor( private _http: Http) {
    this.isUserLoggedIn = false;
   }
   _url = 'http://192.168.14.38:3000/api/';
  // setUserLoggedIn(){
  //   this.isUserLoggedIn = true;
  //   this.username = 'admin';
  // }

setHeader(){
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  });
  const options = new RequestOptions({ headers: headers });
  return options;
}

postUserDetails( user ) {
    return this._http.post(this._url + 'users',
     {username: user.username, email: user.email, password: user.password } )
    .subscribe(res => console.log(res));
}

loginUser( user ) {
    console.log(user.username + user.password);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._url + 'userLogin',
    {username: user.username, password: user.password},options).map(
       (res: Response) => res.json( ));
}

isLoggedin(): Observable<any> {
  const a = JSON.parse(localStorage.getItem('loggedIn'));
  return Observable.of(a);
}

adminLogin(): Observable<any> {
  const b = localStorage.getItem('token');
  console.log(b);
  return Observable.of(b);
}

// Movies
movieList() {
  return this._http.get(this._url + 'movies', this.setHeader());
}

postMovie(movie) {
  return this._http.post(this._url + 'movies',
  {name: movie.name, genre: movie.genre, description: movie.description, _url: movie._url} )
  .subscribe(res => console.log(res));
}

deleteMovie(id) {
  console.log(id);
  return this._http.delete(this._url + 'movies/' + id);
}

updateMovie(id,movie) {
  return this._http.put(this._url + 'movies/' + id,
   {name: movie.name, genre: movie.genre, description: movie.description, _url: movie.image});
}

// Series 
postSeries(series) {
  return this._http.post(this._url + 'series', {sid: series.sid, name: series.name, genre: series.genre, description: series.description});
}

seriesList() {
  return this._http.get(this._url + 'series', this.setHeader());
}

updateSeries(sid, series){
  return this._http.put(this._url + 'series/' + sid, 
  {name: series.name, genre: series.genre, description: series.description});
}

deleteSeries(sid) {
  return this._http.delete(this._url + 'series/' + sid);
}

// Seasons
seasonList(sid) {
  return this._http.get(this._url + 'seasons/' + sid, this.setHeader());
}

postSeason(season) {
  return this._http.post(this._url + 'seasons/',
{sid: season.sid, seasonNumber: season.seasonNumber, seasonName: season.seasonName, description: season.description});
}

deleteSeason(sid,sno) {
  return this._http.delete(this._url + 'seasons/' + sid + '/' + sno);
}

updateSeason(sid, sno, season) {
  return this._http.put(this._url + 'seasons/' + sid + '/' + sno,
{sid: season.sid, seasonNumber: season.seasonNumber, seasonName: season.seasonName, description: season.description});
}
 
// Episodes
postEpisode(episode) {
  return this._http.post(this._url + 'episodes/',
{sid: episode.sid, seasonNumber: episode.seasonNumber, episodeName: episode.episodeName, episodeNumber: episode.episodeNumber ,description: episode.description});
}

episodeList(sid, snumber) {
  return this._http.get(this._url + 'episodes/' + sid + '/' + snumber, this.setHeader());
}

deleteEpisode(id) {
  return this._http.delete(this._url + 'episodes/' + id );
} 

}
