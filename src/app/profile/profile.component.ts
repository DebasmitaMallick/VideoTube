import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Video } from '../models/VideoInfo.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = "Admin"
  subCount: number = 1
  // objectKeys = Object.keys;
  userId = 0;
  private details = new User(this.userId);
  userDetails = this.details.details[0];
  subscribers = 4
  views = 12

  videoInfo = new Video(1);
  videoListTemp = this.videoInfo.videoList;
  videoList: Video['videoList'] = [];
  requiredVideos(array: Video['videoList']) {
    array = this.videoListTemp;
    for (var i = 0; i < array.length; i++) {
        if(array[i].uploadedBy === this.userDetails.username){
          this.videoList.push(array[i]);
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.requiredVideos(this.videoList);
  }

}
