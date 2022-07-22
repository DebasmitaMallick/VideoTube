import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  firstname: string | undefined;
  lastname: string | undefined;
  password: string | undefined;
  email: string | undefined;
  userId = 0;

  userModel= new User(this.userId).details[0];
  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    const message = `uploaded`;
    alert(message);
  }


}
