import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

  constructor(private service: AppService) { }

  movieForm = new FormGroup({
    name: new FormControl(),
    genre: new FormControl(),
    description: new FormControl(),
    url: new FormControl()
  });
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.movieForm.value);
    this.service.postMovie(this.movieForm.value);
  }
}
