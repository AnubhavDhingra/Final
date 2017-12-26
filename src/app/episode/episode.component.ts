import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  sid: string;
  snumber: string;
  public episode: any = [];
  tokenstatus= '';
  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    this.sid = this.route.snapshot.params['sid'];
    this.snumber = this.route.snapshot.params['snumber'];
    console.log(this.sid + this.snumber);
    this.service.episodeList(this.sid,this.snumber).subscribe(res => {
      this.episode = JSON.parse(res.text());
      console.log(this.episode);
    })
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

  deleteEpisode(id) {
    this.service.deleteEpisode(id).subscribe(res => console.log(res)) 
  }
}
