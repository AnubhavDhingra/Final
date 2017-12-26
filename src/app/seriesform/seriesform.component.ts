import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-seriesform',
  templateUrl: './seriesform.component.html',
  styleUrls: ['./seriesform.component.css']
})
export class SeriesformComponent implements OnInit {

  constructor(private service: AppService ) { }

  seriesForm = new FormGroup({
    name: new FormControl(),
    genre: new FormControl(),
    description: new FormControl(),
    sid: new FormControl()
  });
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.seriesForm.value);
    this.service.postSeries(this.seriesForm.value).subscribe(res => {console.log(res);})
  }

}
