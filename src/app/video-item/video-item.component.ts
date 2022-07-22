import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/VideoInfo.model';
import { Thumbnail } from '../models/SelectThumbnail.model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() videoArray!: Video['videoList'];
  @Input() showDescription!: boolean;
  @Input() large!: string;
  @Input() gridSmall!: string;
  @Input() titleSmall!: string;

  thumbnail = new Thumbnail();
  thumbnailList = this.thumbnail.thumbnailList;

  getThumbnailData(videoId: number){
    let link: string | undefined;
    for (let i = 0; i< this.thumbnailList.length; i++){
        if((this.thumbnailList[i].videoId == videoId) && (this.thumbnailList[i].selected == 1)){
            link = this.thumbnailList[i].filePath;
            break;
        }
    }
    return link;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
