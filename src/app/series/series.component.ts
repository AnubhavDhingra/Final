import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: any = [];
  tokenstatus = '';
  updateId = '';
  constructor(private service: AppService) { }

  ngOnInit() {
    this.seriesList();
  }
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
  // update(id) {
  //   this.updateId = id;

  // }
}
