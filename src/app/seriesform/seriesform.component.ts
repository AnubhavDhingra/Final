import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seriesform',
  templateUrl: './seriesform.component.html',
  styleUrls: ['./seriesform.component.css']
})
export class SeriesformComponent implements OnInit {

  constructor() { }

  seriesForm = new FormGroup({
    name: new FormControl(),
    genre: new FormControl(),
    description: new FormControl()
  });
  ngOnInit() {
  }

}
