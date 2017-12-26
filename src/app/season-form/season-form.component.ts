import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.css']
})
export class SeasonFormComponent implements OnInit {

  constructor(private service: AppService) { }
  
    seasonForm = new FormGroup({
      sid: new FormControl(),
      seasonNumber: new FormControl(),
      seasonName: new FormControl(),
      description: new FormControl()
    });
  ngOnInit() {
  }
 
  onSubmit() {
    console.log(this.seasonForm.value);
    this.service.postSeason(this.seasonForm.value).subscribe(res => { console.log(res);})
  }
}
