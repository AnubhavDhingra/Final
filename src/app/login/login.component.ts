import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppService] 
})
export class LoginComponent implements OnInit {

  constructor(private userService: AppService) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onLogin(){
     this.userService.loginUser(this.loginForm.value).subscribe(data => {
    if (data) {
      console.log('success');
      // this.userService.token = true;
      // this.router.navigate(['/products']);
    } else { // this.router.navigate(['/'])}
    console.log('fai.led');
 }}
 ) 
}
 // this.userService.loginUser(this.loginForm.value).subscribe(data => {};
}

