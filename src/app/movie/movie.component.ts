import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [AppService]
})
export class MovieComponent implements OnInit {
  public movies: any = [];
  // public genre: any = [];
  // public name: String;
  // public genre: String;
  // public description: String;
  // public image: String;
  tokenstatus = '';
  movie_id = '';
  constructor(private service: AppService, private router: Router) { }
  ngOnInit() {
    this.moviesList();
    console.log('movieform');
  }
  updateForm = new FormGroup({
    name: new FormControl(),
    genre: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });

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
  movieID(id){
    this.movie_id = id;
  }
  updateMovie() {
    console.log(this.updateForm.value.genre);
    console.log(this.movie_id);
    this.service.updateMovie(this.movie_id,this.updateForm.value).subscribe(
      res => {console.log(res.json()); alert('movie updated!')});
  }

}
