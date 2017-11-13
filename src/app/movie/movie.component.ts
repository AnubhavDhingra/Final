import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [AppService]
})
export class MovieComponent implements OnInit {
  public movies: any = [];
  public name: String;
  public genre: String;
  public description: String;
  public image: String;
  tokenstatus = '';
  constructor(private service: AppService, private router: Router) { }
  ngOnInit() {
    this.moviesList();
    console.log('movieform');
  }
  moviesList() {
    this.service.movieList().subscribe(res => {
        this.movies = JSON.parse(res.text());
        console.log(this.movies);
      }
    );
  }
  adminlogin() {
    this.service.adminLogin().subscribe(res => this.tokenstatus = res);
    console.log(this.tokenstatus);
    if ( this.tokenstatus === '0') {
      return true;
    } else {
      return false;
    }
  }
  deleteMovie(id) {
      console.log(id);
      this.service.deleteMovie(id).subscribe(res => {console.log(res); } );
  }
  // updateMovie(name, genre, description, image) {

  //  }

}
