import { Component, OnInit } from '@angular/core';
import { Video } from '../models/VideoInfo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video: any

  videoInfo = new Video(1);
  videoList = this.videoInfo.videoList;

  constructor() { 
    this.video = [

    ]
  }

  ngOnInit(): void {
  }

}
