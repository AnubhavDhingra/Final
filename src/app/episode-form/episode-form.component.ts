import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.css']
})
export class EpisodeFormComponent implements OnInit {

  constructor(private service: AppService) { }

  episodeForm = new FormGroup({
    sid: new FormControl(),
    seasonNumber: new FormControl(),
    episodeName: new FormControl(),
    episodeNumber: new FormControl(),
    description: new FormControl()
  });

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.episodeForm.value);
    this.service.postEpisode(this.episodeForm.value).subscribe(res => {console.log(res);})
  }

}
