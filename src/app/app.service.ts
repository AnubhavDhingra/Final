import { Injectable } from '@angular/core';
import { Http, Response , ResponseOptions} from '@angular/http';
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

  // setUserLoggedIn(){
  //   this.isUserLoggedIn = true;
  //   this.username = 'admin';
  // }

postUserDetails( user ) {
    return this._http.post('http://localhost:3000/api/users',
     {name: user.name, username: user.username, email: user.email, password: user.password } )
    .subscribe(res => console.log(res));
}
loginUser( user ) {
    console.log(user.username + user.password);
    return this._http.post('http://localhost:3000/api/userLogin',
    {username: user.username, password: user.password}).map(
      (res: Response) => res.json( ));
}
isLoggedin(): Observable<any> {
  const a = JSON.parse(localStorage.getItem('loggedIn'));
  return Observable.of(a);
}
movieList() {
  return this._http.get('http://localhost:3000/api/movies');
}
postMovie(movie) {
  return this._http.post('http://localhost:3000/api/movies',
  {name: movie.name, genre: movie.genre, description: movie.description, _url: movie._url} )
  .subscribe(res => console.log(res));
}
// updateMovie(name, genre, description, image) {
//   return this._http.put('http://localhost:3000/api/movies', {})
// }
deleteMovie(id) {
  console.log(id);
  return this._http.delete('http://localhost:3000/api/movies/' + id);
}
adminLogin(): Observable<any> {
  const b = localStorage.getItem('token');
  console.log(b);
  return Observable.of(b);
}

seriesList() {
  return this._http.get('http://localhost:3000/api/series');
}
// updateMovie(id) {
//   return this._http.put('http://localhost:3000/api/movies/' + id, {} );
// }

// getUserLoggedIn() {
//   if (localStorage.getItem('Loggedin') === 'true') {
//   return true;
//  } return false;
// }
}
