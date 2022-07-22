import { Component, OnInit } from '@angular/core';
import { Video } from '../models/VideoInfo.model';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  videoInfo = new Video(1);
  videoList = this.videoInfo.videoList;
  shuffleArray(array: Video['videoList']) {
    array = this.videoList;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.shuffleArray(this.videoList);
  }

}
