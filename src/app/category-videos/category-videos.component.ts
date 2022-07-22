import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Video } from '../models/VideoInfo.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-videos',
  templateUrl: './category-videos.component.html',
  styleUrls: ['./category-videos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryVideosComponent implements OnInit {
  Video = new Video(1);
  videoListTemp = this.Video.videoList;
  videoList: Video['videoList'] = [];
  category = 'Social';
  showDescription = true;
  large = 'large'

  requiredVideos(array: Video['videoList']){
    array = this.videoListTemp;
    for(let i=0; i<array.length; i++){
      if(array[i].category === this.category){
        this.videoList.push(array[i]);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.requiredVideos(this.videoListTemp);
    $('.videoGrid').addClass('large');
  }

}
