import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  role: string | undefined;
  phonenumber: string | undefined;
  password: string | undefined;
  email: string | undefined;
  confirmemail: string|undefined;
  userId = null;

  roles=['Admin','Normal User'];

  user= new User(this.userId)
  userModel = this.user.details[0];


  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Signed Up succesfully`;
    alert(message);
  }


}
