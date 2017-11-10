import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor( private _http: Http) { }
  postUserDetails( user ) {
    return this._http.post('http://localhost:3000/api/users', {name: user.name, username: user.username, email: user.email, password: user.password } )
    .subscribe(res => console.log(res));
  }
  loginUser( user ){
    console.log(user.username + user.password);
    return this._http.post('http://localhost:2000/api/userLogin',{username: user.username, password: user.password}).map(
      (res: Response) => res.json( ));
}
}
