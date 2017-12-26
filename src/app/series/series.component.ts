import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: any = [];
  tokenstatus = '';
  updateId = '';
  _sid = '';
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
    this.seriesList();
  }

  updateSeries = new FormGroup({
    name: new FormControl(),
    genre: new FormControl(),
    description: new FormControl()
  })
  seriesList() {
      this.service.seriesList().subscribe(res => {
      console.log(res);
      this.series = JSON.parse(res.text());
      console.log(this.series);
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
  sendName(value) {
    this.router.navigate(['/season', value]);
  }

  seriesID(sid) {
    this._sid = sid;
  }

  seriesUpdate() {
    console.log(this.updateSeries.value + this._sid)
    this.service.updateSeries(this._sid,this.updateSeries.value).subscribe( res => {console.log(res);
      alert('Series Updated');
    })
  }

  deleteMovie(sid) {
    console.log(sid);
    this.service.deleteSeries(sid).subscribe(res => {console.log(res);})
  }

}
