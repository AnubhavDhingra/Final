import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private service: AppService) { }
  loginstatus = '';
  tokenstatus = '';
  adminToken = '';
  ngOnInit() {
    // this.adminRights = localStorage.getItem('token');
    this.checklogin();
    this.adminlogin();
  }
  checklogin() {
    this.service.isLoggedin().subscribe(res => this.loginstatus = res);
    // console.log(this.loginstatus);
    return this.loginstatus;
  }
  onLogout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('token', '1' );
    // console.log(localStorage.getItem('token'));
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
}
