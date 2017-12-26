import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  public season: any = [];
  sid: String ;
  tokenstatus= '';
  seasonSid='';
  seasonNumber= '';
  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    this.sid = this.route.snapshot.params['value'];
    this.service.seasonList(this.sid).subscribe(res => {
      console.log(res);
      this.season = JSON.parse(res.text());
      console.log(this.season);
      }
  );
  }
  updateForm = new FormGroup({
    sid: new FormControl(),
    seasonName: new FormControl(),
    seasonNumber: new FormControl(),
    description: new FormControl()
  });

  adminlogin() {
    this.service.adminLogin().subscribe(res => this.tokenstatus = res);
    console.log(this.tokenstatus);
    if ( this.tokenstatus === '0') {
      return true;
    } else {
      return false;
    }
  } 
  sendName(sid,snumber) {
    this.router.navigate(['/episode', sid, snumber]);
  }
  seasonID(sid,sno) {
    this.sid = sid;
    this.seasonNumber = sno;
  }
  updateSeason(){
    this.service.updateSeason(this.seasonSid,this.seasonNumber,this.updateForm.value).subscribe(res => console.log(res))
  }
  deleteSeason(sid, seasonNumber) {
    this.service.deleteSeason(sid, seasonNumber).subscribe(res => {console.log(res);})
  }
}

