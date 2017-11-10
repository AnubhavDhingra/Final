import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  styles: [`
      input.ng-invalid { border-left: 5px solid red;}
      input.ng-valid { border-left: 5px solid green;}
  `],
  providers: [AppService]
})
export class SignupComponent implements OnInit {

  constructor(private userService: AppService) { }

  ngOnInit() {
  }
  userForm = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit(){
    console.log(this.userForm.value);
    this.userService.postUserDetails(this.userForm.value);
  }

}