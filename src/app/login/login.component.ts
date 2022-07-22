import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from '../login-status.service';
import { User } from '../models/user.model';
import { EnrollmentService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string | undefined;
  password: any | undefined;
  loginStatus: boolean = false;
  loggedIn = false;
  errorMsg = '';
  userId = null;

  User = new User(this.userId);
  userModel = this.User.details[0];
  
  constructor(
    private appService:LoginStatusService, 
    private _enrollmentService: EnrollmentService, 
    private router:Router) { 
  }

  ngOnInit(): void {
    this.appService.currentLoginStatus.subscribe(status => this.loginStatus = status);
  }

  onSubmit(){
    this.loggedIn = true;
    alert("Welcome "+this.userModel.username);
    this._enrollmentService.enroll(this.User).subscribe(
      data => console.log('Success', data),
      error => this.errorMsg = error.statusText
    )
    if(this.errorMsg === ''){
      this.appService.updateLoginStatus(true)
      this.router.navigate(['/']);
    }
  }

}
