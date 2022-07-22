import { Component, OnInit } from '@angular/core';
import { Thumbnail } from '../models/SelectThumbnail.model';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { User } from '../models/user.model';


@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  title : string|undefined;
  description : string|undefined;
  privacyinput : string|undefined;
  categoryInput : string|undefined;
  userId = null;

  User = new User(this.userId);
  userModel = this.User.getUserDetails();

  videoId = 1;

  todos: Thumbnail[];
  constructor() {
    this.todos = [

    ];

  }

  thambnail = new Thumbnail();
  thambnaillist = this.thambnail.thumbnailList;

  req_thumbnaillist: Thumbnail['thumbnailList'] = [];

  requiredThumbnails(){
    let select = '';
    for(let i=0; i<this.thambnaillist.length; i++){
      if(this.thambnaillist[i].videoId === this.videoId){
        if(this.thambnaillist[i].selected === 1){
          select = 'selected';
        } else {
          select = '';
        }
        this.req_thumbnaillist.push(
          {
            id: this.thambnaillist[i].id,
            videoId: this.thambnaillist[i].videoId,
            filePath: this.thambnaillist[i].filePath,
            selected: select,
            title: this.thambnaillist[i].title
          }
        );
      }
    }
  }

  ngOnInit(): void {
    this.setNewThumbnail;
    this.requiredThumbnails();
  }

  setNewThumbnail(thumbnailId:number, videoId:number, itemElement:any) {
    $.post("thambnaillist", { videoId: videoId, thumbnailId: thumbnailId })
    .done(function() {
        var item = $(itemElement);
        var itemClass = item.attr("class");

        $("." + itemClass).removeClass("selected");

        item.addClass("selected");
        alert("Thumbnail updated");
    });


  }
}
