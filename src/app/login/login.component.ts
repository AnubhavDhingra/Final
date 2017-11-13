import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: AppService, private router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  ngOnInit() {
  }

  onLogin() {
     this.userService.loginUser(this.loginForm.value).subscribe(data => {
    if (data) {
      console.log(data.response.role);
      localStorage.setItem('token', data.response.role);
      localStorage.setItem('loggedIn', 'true');  // for hiding login
      console.log(localStorage.getItem('loggedIn'));
      //  this.userService.token = true;
       this.router.navigate(['/dashboard']);
    } else { // this.router.navigate(['/'])}
    console.log('failed');
 }}
 );
}
 // this.userService.loginUser(this.loginForm.value).subscribe(data => {};
}

