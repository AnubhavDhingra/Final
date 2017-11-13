import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: AppService, private router: Router) { }
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.userService.postUserDetails(this.userForm.value);
    this.router.navigate(['/login']);
  }

}